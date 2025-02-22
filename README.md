# My Portfolio Website

Welcome to my portfolio repository! This project is a showcase of my skills, projects, and journey as a full-stack developer. Built with **Next.js**, this portfolio highlights my proficiency in modern web technologies and my passion for creating dynamic and responsive web applications.

## 🌟 Project Overview

This portfolio website serves as a central hub for my professional presence online. It includes sections for my latest projects, a detailed resume, a blog where I share insights and experiences, and a contact form to get in touch with me.

## 🚀 Features

- **Dynamic Project Showcase:** Displays my projects with live demos, detailed descriptions, and links to source code.
- **Interactive Resume:** A comprehensive and interactive resume detailing my skills, experiences, and education.
- **Blog Section:** Articles and posts sharing knowledge, experiences, and tutorials on various tech topics.
- **Responsive Design:** Ensures an optimal viewing experience on all devices, from desktops to mobile phones.
- **Contact Form:** Easy way for visitors to get in touch with me directly through the site.

## 🛠️ Technologies Used

- **Frontend:** Next.js, React, Tailwind CSS, SCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Deployment:** Vercel
- **Tools:** Git, VS Code, Postman

## 📸 Screenshots

![Home Page](https://link-to-screenshot.com/homepage.png)
![Projects Page](https://link-to-screenshot.com/projects.png)
![Blog Page](https://link-to-screenshot.com/blog.png)
![Contact Page](https://link-to-screenshot.com/contact.png)

## 📚 Project Structure

```
my-portfolio/
.
├── app
│   ├── blog
│   │   └── page.tsx
│   ├── components
│   │   ├── fonts.ts
│   │   ├── Footer.jsx
│   │   │   └── index.tsx
│   │   ├── Navigation
│   │   │   └── index.tsx
│   │   ├── PostCard
│   │   │   └── index.tsx
│   │   ├── ProfilePhoto
│   │   │   └── index.tsx
│   │   └── WorkCard
│   │       └── index.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── _images
│   │   └── profile-photo-square.jpeg
│   ├── layout.tsx
│   ├── page.tsx
│   └── project
│       └── page.tsx
├── LICENSE
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── profile-photo-square.jpeg
│   ├── Saviour Eking Resume.pdf
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 💡 Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TheSaviourEKing/portfolio.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`

## 🚧 Roadmap

- [ ] Add more blog posts
- [ ] Implement dark mode
- [ ] Enhance accessibility features
- [ ] Integrate third-party services (e.g., Mailchimp for newsletters)
- [ ] Add animations and micro-interactions for better UX

## 🤝 Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request. Please ensure that your changes align with the project's coding standards and practices.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📬 Contact

Feel free to reach out to me for any questions, collaborations, or freelance opportunities:
- **Email:** saviour.eking@outlook.com
- **LinkedIn:** [Saviour Eking](https://www.linkedin.com/in/saviour-eking/)
- **GitHub:** [thesavioureking](https://github.com/thesavioureking)

---

Thank you for checking out my portfolio repository! I hope you find my work interesting and inspiring. 🚀

---
# **Build your portfolio with Once UI's Magic Portfolio**

View the [demo here](https://demo.magic-portfolio.com).

![Magic Portfolio](public/images/cover.png)


# **Getting started**

Magic Portfolio was built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

**1. Clone the repository**
```
git clone https://github.com/once-ui-system/magic-portfolio.git
```

**2. Install dependencies**
```
npm install
```

**3. Run dev server**
```
npm run dev
```

**4. Edit config**
```
src/app/resources/config
```

**5. Edit content**
```
src/app/resources/content (or content-i18n for localization)
```

**6. Create blog posts / projects**
```
Add a new .mdx file to src/app/[locale]/blog/posts or src/app/[locale]/work/projects
```

# **Features**

## **Once UI**
- All tokens, components & features of [Once UI](https://once-ui.com)

## **SEO**
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

## **Design**
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

## **Content**
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

## **Localization (NEW)**
- Magic Portfolio now supports localization with the next-intl library
- See more info in resources/config.js

# **Authors**

Connect with us on Threads or LinkedIn.

Lorant Toth: [Threads](https://www.threads.net/@lorant.one), [LinkedIn](https://www.linkedin.com/in/tothlorant/)  
Zsofia Komaromi: [Threads](https://www.threads.net/@zsofia_kom), [LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)

Localization added by [François Hernandez](https://github.com/francoishernandez)

# **Get involved**

- Join the [Design Engineers Club on Discord](https://discord.com/invite/5EyAQ4eNdS) and share your portfolio with us!
- Report a [bug](https://github.com/once-ui-system/magic-portfolio/issues/new?labels=bug&template=bug_report.md).

# **License**

Distributed under the CC BY-NC 4.0 License.
- Commercial usage is not allowed.
- Attribution is required.

See `LICENSE.txt` for more information.

# **Deploy with Vercel**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fcover.png)