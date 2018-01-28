# PO Principles Practical Task

## Overview

You'll be requested to create a system of of classes that will implement the Page Object pattern.
Using the created PO you'll need to 2 test cases. See the cases description in the [Case description](#case_description)


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
