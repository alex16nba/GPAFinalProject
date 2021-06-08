
function validation(){
		let firstNameElem = document.getElementById('firstName').value
		if(firstNameElem === ""){
			document.getElementById("firstNameError").style.display = 'block';
		}
		else { document.getElementById("firstNameError").style.display = 'none';
		}
		
		let lastNameElem = document.getElementById('lastName').value
		if(lastNameElem === ""){
			document.getElementById("lastNameError").style.display = 'block';
		}
		else { document.getElementById("lastNameError").style.display = 'none';
		}
		
		let usernameElem = document.getElementById('userName').value
		if(usernameElem === ""){
			document.getElementById("usernameError").style.display = 'block';
		}
		else{ document.getElementById("usernameError").style.display = 'none';
		}
		
		let passwordElem = document.getElementById('passWord').value
		if(passwordElem === ""){
			document.getElementById("passwordError").style.display = 'block';
		}
		else {document.getElementById("passwordError").style.display = 'none';
		}
}

