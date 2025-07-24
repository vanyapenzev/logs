<script>
  import SvelteRouter, { Link } from 'svelte-router';
  import PerfectScrollbar from 'perfect-scrollbar'
	import { fly } from 'svelte/transition';
	import { navType, navArray } from 'json/tables';

  let selectMenu = 1;

  const menuData = [
    {
      class: "sidebar-title",
      name: "Главная",
    },    
    {
      name: "Главная",
      icon: "home",
    },
    {
      class: "sidebar-title",
      name: "Логи",
    },  
    {
      name: "Поиск",
      icon: "users",
      list: [
        {name: "Поиск по нику/uuid"},
        {name: "Поиск по предмету"},
        {name: "Поиск по авто"},
        {name: "Поиск по дому"},
        {name: "Поиск по бизнесу"},
      ]
    }, 
    {
      name: "База персонажей",
      icon: "list",
      list: [
      ]
    }, 
    {
      name: "Логи",
      icon: "list",
      list: [
      ]
    }, 
    {
      name: "Информация",
      icon: "bar-chart",
      list: [
        {name: "Аккаунты"},
        {name: "Персонажи"},
        {name: "Денежные операции"},
        {name: "Список банов"},
        {name: "Список домов"},
        {name: "Список итемов"},
        {name: "Список вопросов"},
        {name: "Список фракций"},
        {name: "Список бизнесов"},
        {name: "Список машин"},
        {name: "Список промокодов"},
        {name: "Список бонус кодов"},
      ]
    }, 
  ];

  import { onMount } from 'svelte';
  onMount(async () => {
    let index = menuData.findIndex(l => l.name == "Логи" && l.list);
    if (menuData [index]) {
			menuData [index].list = navArray.filter(el => el.type === navType.log);
    }
    
    index = menuData.findIndex(l => l.name == "База персонажей" && l.list);
    if (menuData [index]) {
			menuData [index].list = navArray.filter(el => el.type === navType.basic);
    }
  });
  let ps;
  const initScrollbar = (node) => {
    ps = new PerfectScrollbar(node);
    //ps.update();
  }
  
  const onSelectMenu = (e, index) => {
    e.preventDefault();
    if (selectMenu === index) {
      /*if (menuData [index].list) {
        selectMenu = -1;
      }*/
      return;
    } else 
      selectMenu = index;

    const menu = menuData [index];
    if (menu.nav)
      SvelteRouter.replace ("/" + menu.nav);

    ps.update();
  }
  
  const onSelectComponent = (e, index) => {
    e.preventDefault();
    
    const menu = menuData [selectMenu];

    if (menu.list && menu.list [index]) {

      for (let i = 0; i < menu.list.length; i++) {
        if (index !== i && menu.list [i]) {
          menu.list [i].active = false;
        }
      }

      if (menu.list [index].active == undefined)
        menu.list [index].active = false;
        
      menu.list [index].active = !menu.list [index].active;
      menuData [selectMenu] = menu;
      if (menu.list [index].active) 
        SvelteRouter.replace ("/" + menu.list [index].nav);
    }
      
  }
</script>
<div class="page-sidebar" use:initScrollbar>
    <ul class="list-unstyled accordion-menu">
      {#each menuData as menu, index}
        {#if menu.class}
          <li class={menu.class}>
            {menu.name}
          </li>
          {:else}
          <li class:active-page={selectMenu === index} class:open={selectMenu === index && menu.list}>
            <a href="##" on:click={(e) => onSelectMenu (e, index)}>
              {#if menu.icon}<i data-feather={menu.icon}></i>{/if}
              {menu.name}
              {#if menu.list}<i class="fas fa-chevron-right dropdown-icon"></i>{/if}
            </a>
            {#if selectMenu === index && menu.list}
            <ul in:fly="{{ y: -20, duration: 200 }}" >
              {#each menu.list as item, itemIndex}
                <li>
                  <a href="##" on:click={(e) => onSelectComponent (e, itemIndex)} class:active={item.active}>
                    <i class="far fa-circle"></i>
                    {item.name}
                  </a>
                </li>
              {/each}
            </ul>
            {/if}
          </li>
          {/if}
      {/each}
    </ul>
</div>
