<script>
    import ProfileImage from '../../assets/images/avatars/profile-image.png'
    import CardImage from '../../assets/images/card-image.png'
    import '@/css/datatable.css'
    import DataTablets from 'datatables.net-dt'
</script>

<div class="main-wrapper">
      <div class="row">
        <div class="col-xl-12">
            <div class="profile-cover"></div>
            <div class="profile-header">
                <div class="profile-name">
                    Johan Doe
                </div>
                <div class="profile-header-menu">
                    <ul class="list-unstyled">
                        <li><a href="#/" class="active">Главная</a></li>
                        <li><a href="#/">Админ лог</a></li>
                        <li><a href="#/">Лог банов</a></li>
                        <li><a href="#/">Ставки в казино</a></li>
                        <li><a href="#/">Лог арестов</a></li>
                        <li><a href="#/">Conlog</a></li>
                        <li><a href="#/">Deletelog</a></li>
                        <li><a href="#/">Лог мероприятий</a></li>
                        <li><a href="#/">Лог фракций</a></li>
                        <li><a href="#/">Лог входов</a></li>
                        <li><a href="#/">Лог предметов</a></li>
                        <li><a href="#/">Лог денег</a></li>
                        <li><a href="#/">Лог ников</a></li>
                        <li><a href="#/">Лог склада</a></li>
                        <li><a href="#/">Лог тикетов</a></li>
                        <li><a href="#/">Лог банка</a></li>
                        <li><a href="#/">Лог вопросов</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-3">
        <div class="card">
          <div class="card-body">
              <h5 class="card-title">Информация</h5>
              <p>Данные обновлены: 04-08-2021 17:30:03</p>
              <ul class="list-unstyled profile-about-list">
                  <li class="box-flex"><i class="far fa-user m-r-xxs"></i><span class="box-between">UUID <a  class="box-column" href="#/">1005739</a></span></li>
                  <li class="box-flex"><i class="far fa-compass m-r-xxs"></i><span class="box-between">Логин <a  class="box-column" href="#/">rineqp</a></span></li>
                  <li class="box-flex"><i class="far fa-lightbulb m-r-xxs"></i><span class="box-between">Уровень администрирования<div  class="box-column" href="#/">0</div></span></li>
                  <li class="box-flex"><i class="far fa-heart m-r-xxs"></i><span class="box-between">Онлайн <div  class="box-column" href="#/">1</div></span></li>
                  <li class="box-flex"><i class="far fa-calendar-alt m-r-xxs"></i><span class="box-between">Дата регистрации: <div  class="box-column" href="#/">12.07.2020 11:47</div></span></li>
                  <li class="box-flex"><i class="far fa-calendar-plus m-r-xxs"></i><span class="box-between">Уровень: <div  class="box-column" href="#/">11</div></span></li>
                  <li class="box-flex"><i class="far fa-calendar-times m-r-xxs"></i><span class="box-between">Exp: <div  class="box-column" href="#/">12</div></span></li>
                  <li class="box-flex"><i class="far fa-user-circle m-r-xxs"></i><span class="box-between">VIP: <div  class="box-column" href="#/">13</div></span></li>
                  <li class="box-flex"><i class="far fa-chart-bar m-r-xxs"></i><span class="box-between">Фракция / Ранг: <div  class="box-column" href="#/">RM / 11</div></span></li>
                  <li class="box-flex"><i class="far fa-building m-r-xxs"></i><span class="box-between">Недвижимость: <a  class="box-column" href="#/">Дом 1488</a></span></li>
                  <li class="box-flex"><i class="far fa-hand-lizard m-r-xxs"></i><span class="box-between">Бизнес <div  class="box-column" href="#/">0</div></span></li>
                  <li class="box-flex"><i class="far fa-edit m-r-xxs"></i><span class="box-between">Транспорт <a  class="box-column" href="#/">
                    <div>Turismo [55523]</div>
                    <div>Elegy [55523]</div>
                    <div>Super GT [55523]</div>
                    <div>Infernus [55523]</div>
                    <div>Phoenix [55523]</div>
                </a></span></li>
                <li class="box-flex"><i class="far fa-gem m-r-xxs"></i><span class="box-between">Кол-во Redbucks <div  class="box-column" href="#/">0</div></span></li>
                <li class="box-flex"><i class="far fa-bookmark m-r-xxs"></i><span class="box-between">Банковский счет: <div  class="box-column" href="#/">135553</div></span></li>
                <li class="box-flex"><i class="far fa-money-bill-alt m-r-xxs"></i><span class="box-between">Баланс банк. счета <div  class="box-column" href="#/">0$</div></span></li>
                <li class="box-flex"><i class="far fa-money-bill-alt m-r-xxs"></i><span class="box-between">Денег на руках: <div  class="box-column" href="#/">0$</div></span></li>
                <li class="box-flex"><i class="far fa-edit m-r-xxs"></i><span class="box-between">Сим-карта: <a  class="box-column" href="#/">331416</a></span></li>
                <li class="box-flex"><i class="far fa-angry m-r-xxs"></i><span class="box-between">Активные варны: <div  class="box-column" href="#/">0</div></span></li>
                <li class="box-flex"><i class="far fa-angry m-r-xxs"></i><span class="box-between">Активные варны: nickOLD: <div  class="box-column" href="#/">0</div></span></li>
                <li class="box-flex"><i class="far fa-angry m-r-xxs"></i><span class="box-between">Активные баны: <div  class="box-column" href="#/">0</div></span></li>
                <li class="box-flex"><i class="far fa-angry m-r-xxs"></i><span class="box-between">Активные деморганы: <div  class="box-column" href="#/">0</div></span></li>
                <li class="box-flex"><i class="far fa-angry m-r-xxs"></i><span class="box-between">Активные муты: <div  class="box-column" href="#/">0</div></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #1: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #2: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #3: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #4: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #5: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #6: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #7: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #8: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                <li class="box-flex"><i class="far fa-address-book m-r-xxs"></i><span class="box-between">Персонаж #9: <a  class="box-column" href="#/">William_Brandt(0001323)</a></span></li>
                  <li class="profile-about-list-buttons">
                      <button class="btn btn-block btn-primary m-t-md">Искать по дате</button>
                      <button class="btn btn-block btn-success m-t-md">Обновить</button>
                  </li>
              </ul>
          </div>
      </div>
      <div class="card">
        <div class="card-body">
            <h5 class="card-title">Информация</h5>
            <ul class="list-unstyled profile-about-list">
                <li><i class="far fa-envelope m-r-xxs"></i><span>johan.doe@gmail.com</span></li>
                <li><i class="far fa-compass m-r-xxs"></i><span>Moscow, Russia</span></li>
            </ul>
        </div>
    </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Лог персонажа</h5>
                        <div id="zero-conf_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="zero-conf_length"><label>Show <select name="zero-conf_length" aria-controls="zero-conf" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="zero-conf_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="zero-conf"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="zero-conf" class="display dataTable" style="width: 100%;" role="grid" aria-describedby="zero-conf_info">
                            <thead>
                                <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="zero-conf" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 150px;">Name</th><th class="sorting" tabindex="0" aria-controls="zero-conf" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 222px;">Position</th><th class="sorting" tabindex="0" aria-controls="zero-conf" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 112px;">Office</th><th class="sorting" tabindex="0" aria-controls="zero-conf" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 34px;">Age</th><th class="sorting" tabindex="0" aria-controls="zero-conf" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 86px;">Start date</th><th class="sorting" tabindex="0" aria-controls="zero-conf" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 83px;">Salary</th></tr>
                            </thead>
                            <tbody>
                            <tr role="" class="">
                                    <td class="sorting_1">Airi Satou</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>33</td>
                                    <td>2008/11/28</td>
                                    <td>$162,700</td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">Angelica Ramos</td>
                                    <td>Chief Executive Officer (CEO)</td>
                                    <td>London</td>
                                    <td>47</td>
                                    <td>2009/10/09</td>
                                    <td>$1,200,000</td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">Ashton Cox</td>
                                    <td>Junior Technical Author</td>
                                    <td>San Francisco</td>
                                    <td>66</td>
                                    <td>2009/01/12</td>
                                    <td>$86,000</td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">Bradley Greer</td>
                                    <td>Software Engineer</td>
                                    <td>London</td>
                                    <td>41</td>
                                    <td>2012/10/13</td>
                                    <td>$132,000</td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">Brenden Wagner</td>
                                    <td>Software Engineer</td>
                                    <td>San Francisco</td>
                                    <td>28</td>
                                    <td>2011/06/07</td>
                                    <td>$206,850</td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">Brielle Williamson</td>
                                    <td>Integration Specialist</td>
                                    <td>New York</td>
                                    <td>61</td>
                                    <td>2012/12/02</td>
                                    <td>$372,000</td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">Bruno Nash</td>
                                    <td>Software Engineer</td>
                                    <td>London</td>
                                    <td>38</td>
                                    <td>2011/05/03</td>
                                    <td>$163,500</td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">Caesar Vance</td>
                                    <td>Pre-Sales Support</td>
                                    <td>New York</td>
                                    <td>21</td>
                                    <td>2011/12/12</td>
                                    <td>$106,450</td>
                                </tr><tr role="row" class="odd">
                                    <td class="sorting_1">Cara Stevens</td>
                                    <td>Sales Assistant</td>
                                    <td>New York</td>
                                    <td>46</td>
                                    <td>2011/12/06</td>
                                    <td>$145,600</td>
                                </tr><tr role="row" class="even">
                                    <td class="sorting_1">Cedric Kelly</td>
                                    <td>Senior Javascript Developer</td>
                                    <td>Edinburgh</td>
                                    <td>22</td>
                                    <td>2012/03/29</td>
                                    <td>$433,060</td>
                                </tr></tbody>
                            <tfoot>
                                <tr><th rowspan="1" colspan="1">Name</th><th rowspan="1" colspan="1">Position</th><th rowspan="1" colspan="1">Office</th><th rowspan="1" colspan="1">Age</th><th rowspan="1" colspan="1">Start date</th><th rowspan="1" colspan="1">Salary</th></tr>
                            </tfoot>
                        </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="zero-conf_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="zero-conf_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="zero-conf_previous"><a href="##" aria-controls="zero-conf" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="##" aria-controls="zero-conf" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="4" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="5" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item "><a href="##" aria-controls="zero-conf" data-dt-idx="6" tabindex="0" class="page-link">6</a></li><li class="paginate_button page-item next" id="zero-conf_next"><a href="##" aria-controls="zero-conf" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-3">
        <div class="card">
          <div class="card-body">
              <h5 class="card-title">Последние посетители:</h5>
              <div class="story-list">
                  <div class="story">
                      <a href="#/"><img src={ProfileImage} alt=""></a>
                      <div class="story-info">
                          <a href="#/"><span class="story-author">Vitaliy Zdobich</span></a>
                          <span class="story-time">12.07.12 12:32</span>
                      </div>
                  </div>
                  <div class="story">
                      <a href="#/"><img src={ProfileImage} alt=""></a>
                      <div class="story-info">
                          <a href="#/"><span class="story-author">Nikita Evolad</span></a>
                          <span class="story-time">11.07.12 11:34</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </div>
</div>