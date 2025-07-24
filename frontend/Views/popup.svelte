<script>
    import '@/css/main.sass'
	import { currentTable } from '../stores.js';
	import { getLogs, getRealPage } from 'api/MainApi';
	import { optionsArray, symbolsArray } from 'json/tables';


    let selectTable = getRealPage ();

    const defaultLine = () => {
        linesArray = [
            {id: 0, indexOption: 0, indexSymbol: 0 },
        ];
        console.log("defaultLine")
    }
    let linesArray = []

    defaultLine ();

    $: if (selectTable) defaultLine ();
    
    function handleDelete(id){
        const index = linesArray.findIndex (l => l.id === id);
        
        if (!linesArray [index])
            return;

        linesArray.splice(index, 1)
        linesArray = linesArray;
    }

    function handleAdd(){
        linesArray.push({id: linesArray.length, indexOption: 0, indexSymbol: 0 });
        linesArray = linesArray;
    }

    function selectIndexOption(linesid, index) {
        linesArray [linesid].indexOption = index;
        linesArray = linesArray;
    }

    function selectIndexSymbol(linesid, index) {
        linesArray [linesid].indexSymbol = index;
        linesArray = linesArray;
    }

    function selectSql() {
        let sendData = [];

        const options = optionsArray[selectTable];
        let index = 0;
        linesArray.forEach((data) => {
            if (sendData.findIndex (s => s.name === data.valueOption && s.symbol === data.valueSymbol) === -1 &&
                options.includes (data.valueOption) && 
                (index = symbolsArray.findIndex (s => s.symbol === data.valueSymbol)) !== -1 && symbolsArray [index].symbol) {
                sendData.push ({
                    name: data.valueOption,
                    symbol: data.valueSymbol,
                    value: data.value,
                })
            }
        });
        //if (sendData.length) {
			getLogs(selectTable, sendData)
			.then((res) => {
				if (res) {
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
        //} else {
			console.log( 'Должно бюыть хоть одно условие' );

        //}
    }
</script>
<div class="popup">
    <div class="modal-content popup__block">
        <div class="popup__header">Фильтрация данных</div>
        <select class="form-control form-control-sm znak" bind:value={selectTable}>
            {#each Object.keys (optionsArray) as name, index}
                <option value={name}>{name}</option> 
            {/each}
        </select>
        {#if optionsArray[selectTable]}
            {#each linesArray as item, linesid}
                <div class="box-between">
                    <select class="form-control form-control-sm znak" bind:value={item.valueOption}>
                        {#each optionsArray[selectTable] as itemOption, index}
                            <option value={itemOption} selected={item.indexOption === index} on:click={() => selectIndexOption (linesid, index)}>{itemOption}</option> 
                        {/each}
                    </select>
                    <select class="form-control form-control-sm znak" bind:value={item.valueSymbol}>                  
                        {#each symbolsArray as itemSymbol, index}
                            <option value={itemSymbol.symbol} selected={item.indexSymbol === index} on:click={() => selectIndexSymbol (linesid, index)}>{itemSymbol.name}</option> 
                        {/each}
                    </select>
                    <input type="text" class="form-control form-control-sm val" bind:value={item.value} placeholder="Введите текст">
                    {#if linesArray.length > 1}
                        <div class="btn btn-danger btn-sm dell" on:click={() => handleDelete(item.id)}>X</div>
                    {:else}
                        <div class="btn btn-danger btn-sm dell" style="opacity: 0">X</div>
                    {/if}
                </div>
            {/each}
            <div class="box-between">
                <div class="btn btn-warning ad1" on:click={handleAdd}>Добавить условие</div>
                <div class="btn btn-dark ad1" on:click={selectSql}>Запросить</div>
            </div>
        {/if}
    </div>
</div>