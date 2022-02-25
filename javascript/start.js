let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('ibfwi').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '/';}};document.getElementById('ir9ak').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu1';}};document.getElementById('ixzzn').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu2';}};document.getElementById('igj3tb').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu3';}};document.getElementById('igkzo2').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("igkzo2")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/view/' + transitionId;}};window.onload = () => {apiMyprojectsApi.getAllmyprojects((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("itxisi").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pimage']");
      if(insideSubDataElement !== null){
        insideSubDataElement.src = data[data.length -i -1].pimage;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pimage'){
        subDataElements[i].src = data[data.length -i -1].pimage;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ptitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].ptitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'ptitle'){
        subDataElements[i].textContent = data[data.length -i -1].ptitle;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
    });
    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};