const filters=document.querySelectorAll('.filter'),publications=document.querySelectorAll('.publication'),yearGroups=document.querySelectorAll('[data-year-group]');
filters.forEach(button=>button.addEventListener('click',()=>{const selected=button.dataset.filter;filters.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',active)});publications.forEach(p=>p.hidden=selected!=='all'&&p.dataset.type!==selected);yearGroups.forEach(group=>group.hidden=!group.querySelector('.publication:not([hidden])'))}));
const header=document.querySelector('.site-header');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>24),{passive:true});
const paperDialog=document.querySelector('#paper-dialog'),dialogContent=paperDialog?.querySelector('.dialog-content');
document.querySelectorAll('[data-paper-open]').forEach(trigger=>trigger.addEventListener('click',()=>{const detail=trigger.closest('.publication').querySelector('.paper-detail');dialogContent.innerHTML=detail.innerHTML;paperDialog.showModal();paperDialog.querySelector('.dialog-close').focus()}));
paperDialog?.querySelector('.dialog-close').addEventListener('click',()=>paperDialog.close());
paperDialog?.addEventListener('click',event=>{if(event.target===paperDialog)paperDialog.close()});
