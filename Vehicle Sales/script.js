

//Function for submitting the form.
function placeOrder()
{
    //Reference the Error Messages and set entries to empty.
    var error = document.getElementById("error")
    var messages = "";
    
    //For the First Name.
    //Reference the First Name.
    var firstName = document.getElementById("firstName");
    
    //Check for an empty or null input.
    if(firstName.value == "" || firstName.value == null)
    {
        //Set error.
        messages += "First Name is a mandatory field.\n"
    }
    //Apply error message to Error Messages.
    if(messages != "")
    {
        error.innerHTML = messages;
    }
    
    //For the Last Name.
    //Reference the Last Name.
    var lastName = document.getElementById("lastName");
    
    //Check for an empty or null input.
    if(lastName.value == "" || lastName.value == null)
    {
        //Set error.
        messages += "Last Name is a mandatory field.\n"
    }
    //Apply error message to Error Messages.
    if(messages != "")
    {
        error.innerHTML = messages;
    }
    
    //For the Address.
    //Reference the Address field.
    var address = document.getElementById("address");
    
    //Check for an empty or null input.
    if(address.value == "" || address.value == null)
    {
        //Set error.
        messages += "Address is a mandatory field.\n";
    }
    if (messages != "")
    {
        //Apply error message to Error Messages.
        error.innerText = messages;
    }
    
    //For the City.
    //Reference the City field.
    var city = document.getElementById("city");
    
    //Check for an empty or null input.
    if(city.value == "" || city.value == null)
    {
        //Set error.
        messages += "City is a mandatory field.\n";
    }
    if (messages != "")
    {
        //Apply error message to Error Messages.
        error.innerText = messages;
    }
    
    //For the Province.
    //Reference the Province field.
    var province = document.getElementById("province");
    
    //Check for an empty or null input.
    if(province == "" || province == null)
    {
        //Set error.
        messages += "Province is a mandatory field.\n";
    }
    if (messages != "")
    {
        //Apply error message to Error Messages.
        error.innerText = messages;
    }
    
    //For the Postal Code.
    //Reference the PostalCode field and set Regular Expression to compare.
    var postalCode = document.getElementById("postalCode");
    var regex = /^[a-zA-Z]\d[a-zA-Z]\s?\-?\d[a-zA-Z]\d$/;
    
    //Check for an empty or null input.
    if(postalCode.value == "" || postalCode.value == null)
    {
        //Set error.
        messages += "Postal Code is a mandatory field.\n";
    }
    //Compare input to Regular Expression.
    else if(regex.test(postalCode.value))
    {
        messages += "";
    }
    else
    {
        //Set error.
        messages += "Postal Code must be in correct format.\n";   
    }
    if (messages != "")
    {
        //Apply error message to Error Messages.
        error.innerText = messages;
    }
    
    //For the Phone.
    //Reference the Phone field and set Regular Expression to compare.
    var phone = document.getElementById("phone");
    var regex = /^\d{3}(\s|\.|-)?\d{3}(\s|\.|-)?\d{4}$/;
    
    //Check for an empty or null input.
    if(phone.value == "" || phone.value == null)
    {
        //Set error.
        messages += "Phone is a mandatory field.\n"
    }
    //Compare input to Regular Expression.
    else if(regex.test(phone.value))
    {
        messages += "";
    }
    else
    {
        messages += "Phone must be in a ten digit format.\n";   
    }
    if (messages != "")
    {
        //Apply error message to Error Messages.
        error.innerText = messages;
    }
    
    //For the Email.
    //Reference the Email field and set Regular Expression to compare.
    var email = document.getElementById("email");
    var regex = /^[a-zA-z]+(\d+)?@[a-zA-z]+\.[a-zA-Z]+/;
    
    //Check for an empty or null input.
    if(email.value == "" || email.value == null)
    {
        //Set error.
        messages += "Email is a mandatory field.\n"
    }
    //Compare input to Regular Expression.
     else if(regex.test(email.value))
    {
        messages += "";
    }
    else
    {
        //Set error.
        messages += "Email must be in a correct format.\n";   
    }
    if (messages != "")
    {
        //Apply error message to Error Messages.
        error.innerText = messages;
    }
    
    //For the Make.
    //Reference the Make.
    var make = document.getElementById("make");
    
    //Check for an empty or null input.
    if(make.value == "" || make.value == null)
    {
        //Set error.
        messages += "Make is a mandatory field.\n"
    }
    //Apply error message to Error Messages.
    if(messages != "")
    {
        error.innerHTML = messages;
    }
    
    //For the Model.
    //Reference the Model.
    var model = document.getElementById("model");
    
    //Check for an empty or null input.
    if(model.value == "" || model.value == null)
    {
        //Set error.
        messages += "Model is a mandatory field.\n"
    }
    //Apply error message to Error Messages.
    if(messages != "")
    {
        error.innerHTML = messages;
    }
    
    //For the Year.
    //Reference the Year.
    var year = document.getElementById("year");
    
    //Check for an empty or null input.
    if(year.value == "" || year.value == null)
    {
        //Set error.
        messages += "Year is a mandatory field.\n"
    }
    //Apply error message to Error Messages.
    if(messages != "")
    {
        error.innerHTML = messages;
    }
    
    if (messages != "")
    {
        //Apply error message to Error Messages.
        error.innerText = messages;
        //Stop the submission to correct errors.
        return false;
    }
    
    //Check for error messages to be displayed.
    else if (messages == "")
    {
        //Reference the Order Form and Receipt.
        var orderForm = document.getElementById("orderForm")
        var output = document.getElementById("output");
        
        var search = document.getElementById("search");
        var sell = document.getElementById("sell");
        
        
        
        if (sell.checked == true)
        {
            
            
            
            
            
            
            
            
            //Save listing to local storage.
            var newListing = firstName.value + lastName.value + address.value + city.value + province.value + postalCode.value + phone.value + email.value + make.value + model.value + year.value;
            
            
            
            /*localStorage.getItem("First Name", firstName.value.toUpperCase()),
            localStorage.getItem("Last Name", lastName.value.toUpperCase()),
            localStorage.getItem("Address", address.value.toUpperCase()),
            localStorage.getItem("City", city.value.toUpperCase()),
            localStorage.setItem("Province", province.value.toUpperCase()),
            localStorage.setItem("Postal Code", postalCode.value.toUpperCase()),
            localStorage.setItem("Phone", phone.value),
            localStorage.setItem("Email", email.value),
            localStorage.setItem("Make", make.value.toUpperCase()),
            localStorage.setItem("Model", model.value.toUpperCase()),
            localStorage.setItem("Year", year.value);*/
            
            
            if (localStorage.getItem('listing') == null)
            {
                localStorage.setItem('listing', '[]');
            }
            
            var oldListing = JSON.parse(localStorage.getItem('listing'));
            oldListing.push(newListing);
            
            localStorage.setItem('listing', JSON.stringify(oldListing));

            
            
            
            
            
            
            //Hide Order Form.
            orderForm.style.display = "none";
            //Hide Messages.
            error.style.display = "none";

            //Fill and present Output.
            output.innerText += ("Sale Details\n" + "<><><><><><><><><>\n" + "\nFirst Name:  " + firstName.value.toUpperCase() + "\nLast Name: " + lastName.value.toUpperCase() + "\nAddress:  " + address.value.toUpperCase() + "\nCity:  " + city.value.toUpperCase() + "\nProvinice:  " + province.value.toUpperCase() + "\nPostal Code:  " + postalCode.value.toUpperCase() + "\nPhone:  " + phone.value + "\nEmail:  " + email.value + "\nMake: " + make.value.toUpperCase() + "\nModel: " + model.value.toUpperCase() + "\nYear: " + year.value.toUpperCase() + "\n\n<><><><><><><><><>");
            return false;
        }
        else if (search.checked == true)
        {
            //Save listing to local storage.
            localStorage.getItem('firstName');
            /*localStorage.setItem("Last Name", lastName.value);
            localStorage.setItem("Address", address.value);
            localStorage.setItem("City", city.value);
            localStorage.setItem("Province", province.value);
            localStorage.setItem("Postal Code", postalCode.value);
            localStorage.setItem("Phone", phone.value);
            localStorage.setItem("Email", email.value);*/
            localStorage.getItem('make');
            localStorage.getItem('model');
            localStorage.getItem('year');
            
            //Hide Order Form.
            orderForm.style.display = "none";
            //Hide Messages.
            error.style.display = "none";
            //Hide Output.
            output.style.display = "none";
            
            results.innerText += ("Search Results\nhttp://www.jdpower.com/cars/" + make.value + "/" + model.value + "/" + year.value);
            return false;
        }
    }
    //Provincial Sales Tax (Canada) AB-5%, BC-12%, MA-12%,NB-15%, NF-15%, NW-5%,NS-15%, NT-5%, ON-13%, PE-15% QC 14.975, SK-11%, YK-5%; As per Wikipedia 2021.
    
    
}