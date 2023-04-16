 var form =document.getElementById('my-form');
 form.addEventListener('submit' ,add);
 function add(e){
    e.preventDefault();
    var id=document.getElementById('mail').value;
    var amt=document.getElementById('amount').value;
    var use=document.getElementById('purpose').value;
    var cat=document.getElementById('Category').value;
    console.log(id + " "+ amt +" "+use +" "+ cat);
    const obj={
        code:id,
        amount:amt,
        purpose:use,
        category:cat

    };
    localStorage.setItem(obj.code ,JSON.stringify(obj));
     showdata(obj);

 }

 function showdata(obj){
    var parelem=document.getElementById("demo").parentElement;
    var li =document.createElement('li');
    var text=document.createTextNode(`${obj.code} ${obj.amount} ${obj.purpose} ${obj.category}`);
      li.appendChild(text);
      var btn =document.createElement('button');
      btn.appendChild(document.createTextNode("delete"));
      li.appendChild(btn);
      var ebtn =document.createElement('button');
      ebtn.appendChild(document.createTextNode("edit"));
      li.appendChild(ebtn);
      parelem.appendChild(li);
      
      btn.addEventListener('click',del);
      function del(e){
        localStorage.removeItem(obj.code);
        parelem.removeChild(li);
      }


      ebtn.addEventListener('click', edit);
        function edit(e){
        localStorage.removeItem(obj.code);
         parelem.removeChild(li);
              document.getElementById('mail').value=obj.code;
              document.getElementById('amount').value=obj.amount;
            document.getElementById('purpose').value=obj.purpose;
               document.getElementById('Category').value=obj.category;
      
      }
 }