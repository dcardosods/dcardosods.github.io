---
title: 'A tale about web-accessibilty'
date: '2019-10-20'
---

Besides all the flashy new technologies, the new javascript framework that is born every week, I've been directing my attention to the basics and the core of the Web. At end everything that you see in a browser is images, HTML, CSS and Javascript.

Not having a disability myself, and growing up using the computer with a mouse, point and click is my main mode of web navigation, and to my lucky is the mode widely developed for. I don't know many people that are disable, but statisctic says that 1 in TODO have some kind of motor restriction.

Besides that, other groups of people that are not medically disable encounter difficulties in using the Web of today, e.g. elderly people who get impaired as they age.

All of that intro is to say that promoting and developing an acessible Web is a win-win for everybody.

intro about a11y
  web accessibility can be seen in many ways and has different layers
    - making it accessible to keyboard users
    - making it ease to read by using the right color constract and font size
    - making it usable by screenreaders
  
pratical use case
  in the process of devoloping our new portal, I started to think about a11y from the get go
  which makes it not as hard as tought
  1st think is to use the platform, and keep it simple
    - use a link if the user should navigate to a new page
    - use buttons for other interactions
    - use native form elements, i.e. don't replace a `select` with a custom dropdown
    - add labels to form elements
    - hide icons from screenreaders
    - provide text for screenreaders when using only icons visible
    - keep the `outline` css style, or an equivalent
    - use a table to display tabular data
  
specific solution to a problem
  for the last point I encounted a problem
    we wanted to have a table row be a link that navigates to a page with more details about that
    row entity
    a `tr` cannot be wrapped in a `a` tag
    a `tr` or `td` cannot have `position: relative` so that the `a` tag can be abusolute posiotioned to it
    `a` should be keyboard accessible with tabbing, i.e. the whole `tr` should
    here I could set `tabindex=0` on the tr, add a click handler and with javascript navigate to the new page
    but I'd lost all the native link behaviour
    solution:
      add `a` to a cell in each row
      add a click handler to the `tr` that will trigger `.click()` on its inner `a`
      use css to hide the `a` however you like
      add proper heading to the link column, and if necessary add text to the link for screenreaders

conclusion and things to learn
  in the process I also had to learn how to user screenreaders, voiceover more specifically
  for auditing I ran the the audits tab on Chrome
  also added tslint codelyzer rules
