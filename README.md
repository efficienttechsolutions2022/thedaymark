# Notes on Best Practices

## HTML + CSS

Use SASS and CSS modules in each component for separation of concerns

Keep globals in globals.css such as h1, h2, etc.

Ensure hierarchy of SEO content. Use only a single h1 on each page.

Use semantic HTML such as header, footer, nav, section, etc..

Use ul li for lists

## Animation

Use Gsap or Framer Motion

Add fade in scroll transitions on most elements

Ensure each page/hero/nav loads smoothly

## Images

For background images that require cover use object-fit:cover instead of background-size:cover for SEO purposes

Use Next image components on images for speed optimization purposes

Add alt tags to images

## Form

Sample Contact Form is included which can post form fields to our api after the url endpoint in the form is updated.

## Browser Size

Keep the browser size component as it is used for review.

## Commits

Use staging branch and provide the vercel deployment link to review
