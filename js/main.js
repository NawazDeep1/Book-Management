
document.addEventListener('DOMContentLoaded', function(){
	
	//===================== Node DOM
	
	var banner = document.querySelector('#page-banner');
	console.log('The Banner node name is ', banner.nodeName);
	console.log('The Banner node type is ', banner.nodeType);
	console.log('The Banner node has child? ', banner.hasChildNodes());
	
	var clonedBanner = banner.cloneNode(true);
	console.log(clonedBanner);
	
	//=================  Node relationship
	
	var list = document.querySelector('#book-list');
	//console.log(list);
	//==================== Node Parent
	
	console.log('The Parent Node is ',list.parentNode);
	console.log('The Grand Parent Node is ',list.parentElement.parentElement);
	
	//==================== Node Children
	console.log('The Child Node is ',list.childNodes);
	console.log('The Child Node is ',list.children);
	
	//==================== Node Sibling
	console.log('The Next Sibling Node is ',list.nextSibling);
	console.log('The Next Sibling Node is ',list.nextElementSibling);
	console.log('The Previous Sibling Node is ',list.previousElementSibling);
	
	list.previousElementSibling.querySelector('p').textContent = 'BOOKS FOR STUDENTS';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

