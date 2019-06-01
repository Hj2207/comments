  const loadComments=()=>{
    document.getElementById('comments').innerHTML= '';
    console.log('hi this is working');
    fetch('http://localhost:3000/helpline')
    .then(res=>res.json())
    .then(data=>data.forEach((comment)=>
          {
              var node = document.createElement("article");
              var name = document.createElement("H3");
              var date = document.createElement("H4");
              var message = document.createElement("P");

              node.className = 'card-body';
              name.className = 'card-title';
              date.className = 'card-subtitle text-muted';
              message.className="comcont";

              var textName = document.createTextNode('Name: ' + comment.userName);
              var textDate = document.createTextNode('Date: ' +comment.date);
              var textMessage = document.createTextNode(comment.ques);

              name.appendChild(textName);
              date.appendChild(textDate);
              message.appendChild(textMessage);

              node.appendChild(name);
              node.appendChild(date);
              node.appendChild(message);

              document.getElementById('comments').appendChild(node);


          })
        );
}

  const insertques=()=>{

    var name=document.getElementById("name").value;
    var message=document.getElementById("message").value;

   fetch('http://localhost:3000/ask', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       name:name,
       message:message
     })
   })
     .then(res=> loadComments());
     document.getElementById("name").value='';
     document.getElementById("message").value='';
 }
