# PO Principles Practical Task

## Overview

You'll be requested to create a system of of classes that will implement the Page Object pattern.

Using the created PO you'll need to 2 test cases. See the cases description in the [Case description](#case_description) section.

## Requirements

- All pages should inherit from a single page.
- For different parts of application there can be several base pages, tha still should inherit from the single page.
- Page elements should be **private**. All interactions should be conductied via public methods.
- PO constructor should print to console what page is being opened. E.g.
```javascript
class HomePage {
  constructor() {
    console.log(`The Home Page is opened.`);
  }
}
```


- Element description should be assigned to page element. E.g.
```javascript
class HomePage {
  constructor() {
    this._searchField = 'Search Field Input';
    
    console.log(`The Home Page is opened.`);
  }
}
```

- PO methods should print to console actions that are performed by those methods.
```javascript
class HomePage {
  constructor() {
    this._searchField = 'Search Field Input';
    this._searchButton = 'Search Button';

    console.log(`The Home Page is opened.`);
  }
  
  searchDomain(domainName) {
    console.log(`Fill out ${this._searchField} with ${domainName}`);
    console.log(`Click ${this.__searchButton}`);
  }
}
```

- PO methods that redirect user to another page should return the instace of that page.
```javascript
class HomePage {
  constructor() {
    this._searchField = 'Search Field Input';
    this._searchButton = 'Search Button';

    console.log(`The Home Page is opened.`);
  }
  
  searchDomain(domainName) {
    console.log(`Fill out ${this._searchField} with ${domainName}`);
    console.log(`Click ${this.__searchButton}`);
    
    return new SearchDomainResultPage();
  }
}

class SearchDomainResultPage {
  constructor() {
     console.log(`The Search Domain Results Page is opened.`);
   }
}
```

- If some page should be accessed directly (there are no user actions that can lead to that page, except direct URL navigation) static method (e.g. `visit`) should exist on that PO class and return an instance of the class. Also the method should print to console, that the page has been navigated.

```javascript
class PaypalLoginPage {
  static visit() {
    console.log(`Navigating to the Paypal Login Page directly by URL.`);
    
    return new PaypalLoginPage();
  }
  
  constructor() {
    console.log(`The Paypal Login Page is opened.`);
  }
}
```
- Do not forget to split you pages to partials if sucn splitting is required.

See the example of the PO and test in the `po_example` directory.

---

## <a id="case_description"></a>Case description

---

### 3474572 Link twitter account

#### Preconditions

* User is logged (twitter handle is not configured)
* Authorize page is opened
* AP: Profile > Info page > Add handle button

#### Steps

1) Set correct email and password
2) Press "Authorize app" button

#### Expected Result

*Personal info page is opened
*'Success! Your Twitter and Namecheap accounts are now linked.' message appeared on the top of 'Personal Info' page
*The status should be display the "@[Twitter handel] and the message 'Your accounts have been linked'
*Button 'Refresh' is displayed instead 'Add handle'

---

### 3189154 Can`t link existing twitter account with 'Authorize app' button and correct credentials

#### Preconditions

* [User1] with handled [testtwitter] account
* [User2] without twitter account
* [User2] is logged in account panel
* AP > Profile > "Personal Info" page is opened

#### Steps

1) Click 'Add handle'
2) Set email and password of twitter account handled to [User2] on 'Authorize' page
3) Press "Authorize app" button

#### Expected Result

* Alert 'This twitter account is already used for another namecheap user.' message appeared on the top of 'Personal Info' page
* Status of Twitter is 'No handle'

---
