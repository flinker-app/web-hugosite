# My Hugo Site

This is a simple Hugo site project. Below are the details and instructions for setting up and running the site.

## Project Structure

- **archetypes/**: Contains archetypes for new content types.
  - **default.md**: Default archetype for new content.
  
- **content/**: Contains the content files for the site.
  - **_index.md**: Main content file for the homepage.
  
- **layouts/**: Contains the layout templates for the site.
  - **_default/**: Default layout templates.
    - **baseof.html**: Base template for the site.
    - **list.html**: Template for rendering lists of content.
    - **single.html**: Template for rendering individual content pages.
  
### Layouts in Hugo:
Single Layout (single.html):

Use Case: This layout is typically used for individual content pages, such as blog posts, articles, or any standalone page.
Example: Blog posts, individual articles, or detailed pages.

---
title: "Home"
date: 2025-03-05
draft: false
layout: "single"
---

List Layout (list.html):

Use Case: This layout is used for listing multiple pieces of content, such as a list of blog posts, a list of projects, or any collection of items.
Example: Blog index page, project listings, category pages.

---
title: "Blog"
date: 2025-03-05
draft: false
layout: "list"
---

Home Layout (index.html or _index.md):

Use Case: This layout is used for the homepage of your site. It can be a special layout that includes a mix of content, such as featured posts, recent articles, or custom sections.
Example: The main landing page of your website.

---
title: "Home"
date: 2025-03-05
draft: false
---

Default Layout (baseof.html):

Use Case: This is a base template that other templates can extend. It typically includes common elements like the header, footer, and main structure of the page.
Example: Used as a base for other layouts like single.html and list.html.

- **static/**: Contains static files such as CSS.
  - **css/**: Directory for CSS files.
    - **styles.css**: CSS styles for the site.
  
- **config.toml**: Configuration file for the Hugo site.

## Getting Started

1. **Install Hugo**: Make sure you have Hugo installed on your machine. You can download it from [Hugo's official website](https://gohugo.io/getting-started/installation/).

2. **Clone the Repository**: Clone this repository to your local machine.

   ```
   git clone <repository-url>
   ```

3. **Navigate to the Project Directory**:

   ```
   cd my-hugo-site
   ```

4. **Run the Hugo Server**: Start the Hugo server to view your site locally.

   ```
   hugo server
   ```

5. **Open Your Browser**: Go to `http://localhost:1313` to see your site in action.

## Customization

- You can add new content by creating new Markdown files in the `content/` directory.
- Modify the layout templates in the `layouts/` directory to change the appearance of your site.
- Update the `config.toml` file to change site-wide settings such as the title and base URL.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.


## Structure

To structure your Hugo site with a mix of HTML files and Markdown files, you can follow these guidelines:

Content Directory:

Store your Markdown files (e.g., blog posts) in the content directory.
Organize them into subdirectories as needed (e.g., content/blog, content/legal).
Layouts Directory:

Store your custom HTML files in the layouts directory.
Create specific layout files for different sections of your site.
Static Directory:

Store static assets like CSS, JavaScript, images, etc., in the static directory

**Example structure:**

my-hugo-site/
├── content/
│   ├── blog/
│   │   └── my-first-post.md
│   ├── legal/
│   │   └── terms.md
│   └── _index.md
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── list.html
│   │   └── single.html
│   ├── index.html
│   ├── about.html
│   └── contact.html
├── static/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── js/
│   │       └── main.js
│   └── images/
│       └── logo.png
└── config.toml

**Steps to Structure Your Site:**
Create Custom HTML Pages:

Place your custom HTML files (e.g., index.html, about.html, contact.html) in the layouts directory.
These files will be used as templates for the corresponding pages.
Create Content Files:

Place your Markdown files in the content directory.
Organize them into subdirectories as needed.
Update config.toml:

Ensure your config.toml file is configured correctly to recognize the custom layouts and content structure.