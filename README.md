# 🧠 N3RD_K1LL_B0T

A nerdy, savage, evil chatbot built with React, TailwindCSS, and shadcn/ui. It roasts users, mocks stupidity, and responds with dark nerd humor.

---



## ⚙️ Setup Instructions

Follow these steps to run the project on your system:

# 1️⃣ Clone the Repo

```bash
git clone https://github.com/Arjunslab/N3RD_K1LL_B0T.git
cd N3RD_K1LL_B0T
```
# 2️⃣ Install Dependencies

npm install

# 3️⃣ Run It

npm run dev

Then open 👉 http://localhost:5173 in your browser.
❗ If You See This Error:

The following dependencies are imported but could not be resolved:
  @/components/ui/card
  @/components/ui/input
  @/components/ui/button

That’s because shadcn/ui components are referenced but not generated yet.
✅ Fix It

    Initialize shadcn/ui:

npx shadcn-ui@latest init

    Press Enter on all prompts.

    Choose JavaScript if asked.

    Then run:

npx shadcn-ui@latest add button input card

This will create:

/components/ui/
├── button.jsx
├── input.jsx
└── card.jsx

✅ Now refresh and you’re good to go.
⚠️ Also Fix This Warning (Optional)

If you see:

[MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type not specified...

Go to your package.json and add:

"type": "module",
 
Full example:

{
  "name": "n3rd_k1ll_b0t",
  "version": "1.0.0",
  "type": "module",
  ...
}

# 📁 Folder Structure

.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── App.jsx
    ├── NerdKillBot.jsx
    ├── main.jsx
    └── index.css

# 🤖 Features

    Evil chatbot that mocks stupidity

    Recognizes keywords: help, joke, destroy, code

    UI built with shadcn/ui components

    Fully styled with Tailwind CSS

    Blazing-fast dev with Vite

# 📦 Build for Production

npm run build

#👨‍💻 Author
@Arjunslab
Made with hate by Arjun 💀
Botlord. Nerd slayer. Syntax bender.
