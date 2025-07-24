<script>
    import '@/css/datatable.css'
	import { getLogs, getRealPage, getLogsToCount, getLogsToOrder, getLogsSearch } from 'api/MainApi';
	import { optionsArray, symbolsArray } from 'json/tables';
    import moment from 'moment'

    import { onMount } from 'svelte';
    
    let logsList = [];    
    let logsHeader = [];

	let orderData = {};

    onMount(async () => {
        const page = getRealPage ()

        getLogs(page, [])
			.then((res) => {
				if (res && typeof res === "object" && res.length) {
					logsList = res;
                    logsHeader = Object.keys (logsList[0]);

					logsHeader.forEach((name) => {
						orderData [name] = -1;
					})
				}
			})
			.catch((err) => {
				if (err === 400) {
					console.log( `Ошибка 400: Токен не передан или передан не в том формате.` );
				}
				if (err === 401) {
					console.log( 'Ошибка 401: Переданный токен некорректен.' );
				} else {
					console.log(err);
				}
			});
    });

    let count = 50;
    $: if (count) {
        getLogsToCount (count)
			.then((res) => {
				if (res && typeof res === "object" && res.length) {
					logsList = res;
				}
			})
			.catch((err) => {
				if (err === 400) {
					console.log( `Ошибка 400: Токен не передан или передан не в том формате.` );
				}
				if (err === 401) {
					console.log( 'Ошибка 401: Переданный токен некорректен.' );
				} else {
					console.log(err);
				}
			});
    }

    let searchText = '';
    const filterCheck = (el, text) => {
        text = text.toLowerCase().trim();
        let success = false;
        Object.values(el).forEach((item) => {
            if (!Array.isArray(item)) {
                if (String (item).toLowerCase().trim().includes(text.replace(" ", "_")))
                    success = true;
            } else {
                item.forEach((i) => {                        
                    if (String (i).toLowerCase().trim().includes(text.replace(" ", "_")))
                        success = true;
                })
            }
        })
        return success;
    }
    function type(value) {
        var regex = /^\[object (\S+?)\]$/;
        var matches = Object.prototype.toString.call(value).match(regex) || [];

        return (matches[1] || 'undefined').toLowerCase();
    }

	//

	const updateOrder = (name) => {
		logsHeader.forEach((hName) => {
			if (hName !== name)
				orderData [hName] = -1;
		});

		if (orderData [name] == -1)
			orderData [name] = true;
		else
			orderData [name] = !orderData [name];

		getLogsToOrder (name, orderData [name])
			.then((res) => {
				if (res && typeof res === "object" && res.length) {
					logsList = res;
				}
			})
			.catch((err) => {
				if (err === 400) {
					console.log( `Ошибка 400: Токен не передан или передан не в том формате.` );
				}
				if (err === 401) {
					console.log( 'Ошибка 401: Переданный токен некорректен.' );
				} else {
					console.log(err);
				}
			});

	}

	//

	const isValidData = (data) => {
		var d = Date.parse(data);

		if (isNaN(d) == false) {

			return new Date(data).getFullYear() > 2000;
		}
		return false;
	}

	//

	let isSearch = false;

	const onSearch = () => {
		if (!isSearch) {
			if (searchText && searchText.length > 0) {
				let sendData = [];

				logsHeader.forEach((hName) => {
					sendData.push({
						name: hName,
						symbol: "like",
						value: searchText,
					})
				});

				search(sendData, true);

			} else {
				console.log('Должно бюыть хоть одно условие');

			}
		} else {
			search([], false);
		}
		isSearch = !isSearch;
		searchText = "";
	}

	const search = (sendData, isOr) => {
		const page = getRealPage ()
		getLogsSearch(page, sendData, isOr)
			.then((res) => {
				console.log(res)
				if (res && typeof res === "object" && res.length) {
					logsList = res;
					console.log(res)
				}
			})
			.catch((err) => {
				if (err === 400) {
					console.log( `Ошибка 400: Токен не передан или передан не в том формате.` );
				}
				if (err === 401) {
					console.log( 'Ошибка 401: Переданный токен некорректен.' );
				} else {
					console.log(err);
				}
			});

	}

</script>
<div class="col-md-12 main-wrapper">
	<div class="row">
		<div class="col">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">Лог персонажа</h5>
					<div id="zero-conf_wrapper" class="dataTables_wrapper dt-bootstrap4">
						<div class="row">
							<div class="col-sm-12 col-md-6">
								<div class="dataTables_length" id="zero-conf_length">
									<label>Show
										<select name="zero-conf_length" class="custom-select custom-select-sm form-control form-control-sm" bind:value={count}>
											<option value="5">5</option>
											<option value="25">25</option>
											<option value="50">50</option>
											<option value="100">100</option>
											<option value="150">150</option>
											<option value="250">250</option>
										</select> entries</label>
								</div>
							</div>
							<div class="col-sm-12 col-md-6">
								<div id="zero-conf_filter" class="dataTables_filter" style="display: flex;justify-content: flex-end;align-items: center;">
									<label>Search:
										<input type="search" class="form-control form-control-sm" placeholder="" bind:value={searchText}>
									</label>
									<div class="tr-icon tr-card-icon tr-card-bg-danger text-danger" style="margin-left: 1%;" on:click={onSearch}>
										{#if !isSearch}
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
											<circle cx="11" cy="11" r="8"></circle>
											<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
										</svg>
										{:else}
											X
										{/if}
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<table id="zero-conf" class="display dataTable" style="width: 100%;" role="grid" aria-describedby="zero-conf_info">
									<thead>
										<tr role="row">
                                            {#each logsHeader as name}
                                            <th class="sorting" class:sorting_asc={orderData [name] === true} class:sorting_desc={orderData [name] === false} on:click={() => updateOrder (name)} style="width: {100 / logsHeader.length}%">{name}</th>
                                            {/each}
										</tr>
									</thead>
                                    <tbody>
                                        {#each logsList.filter(el => { return filterCheck(el, searchText)}) as data}
                                            <tr>
                                                {#each Object.values (data) as name}
                                                    {#if isValidData(name)}
                                                    <td style="width: {100 / logsHeader.length}%">{moment(name).format('DD.MM.YYYY HH:mm')}</td>
                                                    {:else}
                                                    <td style="width: {100 / logsHeader.length}%">{name}</td>
                                                    {/if}
                                                {/each}
                                            </tr>
                                        {/each}
                                    </tbody>
									<tfoot>
										<tr>
                                            {#each logsHeader as name}
                                            <th class="sorting" style="width: {100 / logsHeader.length}%">{name}</th>
                                            {/each}
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12 col-md-5">
								<div class="dataTables_info" id="zero-conf_info" role="status" aria-live="polite">Showing {logsList.filter(el => { return filterCheck(el, searchText)}).length} entries</div>
							</div>
							<div class="col-sm-12 col-md-7">
								<div class="dataTables_paginate paging_simple_numbers" id="zero-conf_paginate">
									<ul class="pagination">
										<!--<li class="paginate_button page-item previous disabled" id="zero-conf_previous"><a href="##" aria-controls="zero-conf" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
										<li class="paginate_button page-item active"><a href="##" aria-controls="zero-conf" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
										<li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
										<li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
										<li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
										<li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
										<li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="6" tabindex="0" class="page-link">6</a></li>-->
										<li class="paginate_button page-item next" id="zero-conf_next"><a href="##" class="page-link">Next</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>