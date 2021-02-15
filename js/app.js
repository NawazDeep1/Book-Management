
document.addEventListener('DOMContentLoaded', function(){
	
	var list = document.querySelector('#book-list ul');
	var myForms = document.forms;
	//console.log(myForms);
	
	//=========== Delete a book
	list.addEventListener('click', function(e){
		
		if(e.target.className == 'delete'){
			
			let li = e.target.parentElement;
			// list.removeChild(li);
			li.parentElement.removeChild(li);
		}
		
	})
	
	//=========== Add a book
	var addBook = myForms['add-book'];
	//console.log(addBook);
	addBook.addEventListener('submit',(e)=>{
		e.preventDefault();
		
		var value = addBook.querySelector('input[type="text"]').value;
		
		var newLi = document.createElement('li');
		var newBook = document.createElement('span');
		var newDeleteBtn = document.createElement('span');
		
		newBook.textContent = value;
		newBook.className = 'name';
		
		newDeleteBtn.className = 'delete';
		newDeleteBtn.textContent = 'delete';
		
		// console.log(newDeleteBtn);
		// console.log(newBook);
		newLi.appendChild(newBook);
		newLi.appendChild(newDeleteBtn);
		list.appendChild(newLi);
		
		
		//clean input
		addBook.querySelector('input[type="text"]').value = '';
		
	})
	//=========== Hide books
	
	var hideBox = document.querySelector('#hide');
	hideBox.addEventListener('change', (e)=>{
		if(hideBox.checked){
			
			list.style.display = 'none';
		}else{
			
			list.style.display = 'initial';
		}
		
	})
	
	//=========== Search a book
	var searchBox = myForms['book-search'].querySelector('input');
	searchBox.addEventListener('keyup', (e)=>{
		
		var term = e.target.value.toLowerCase();
		//console.log(term);
		var books = list.getElementsByTagName('li');
		//var books = list.querySelectorAll('li');
		//console.log(books);
		Array.from(books).forEach((book)=>{
			//console.log(book.firstElementChild.textContent.toLowerCase());
			
			let title = book.firstElementChild.textContent.toLowerCase();
			if(title.indexOf(term) != -1){
				book.style.display = 'block';
			}else{
				book.style.display = 'none';
			}
			
			
		})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})

})