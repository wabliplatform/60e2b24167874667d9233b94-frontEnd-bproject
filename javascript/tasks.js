let apiTasksApi = new TempApi.TasksApi();import TempApi from '../src/index';document.getElementById('if40m').onclick = (event) => {
    event.preventDefault();
    { location.href= '/';}};window.onload = () => {apiTasksApi.getAlltasks((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("if40m").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'tname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].tname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'tname'){
        subDataElements[i].textContent = data[data.length -i -1].tname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'sdate']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].sdate;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'sdate'){
        subDataElements[i].textContent = data[data.length -i -1].sdate;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'edate']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].edate;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'edate'){
        subDataElements[i].textContent = data[data.length -i -1].edate;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'vpms']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].vpms;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'vpms'){
        subDataElements[i].textContent = data[data.length -i -1].vpms;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
    });
    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};