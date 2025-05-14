# SoftSell – React Marketing Website for Software License Resale

SoftSell is a modern, responsive React-based single-page application (SPA) designed for a fictional startup that helps users sell unused software licenses. The UI focuses on conversion, user trust, and interactivity with features like animated steps, a contact form modal, and a chat widget.

---

## 🔥 Features

- **Hero Section** – Clean headline, subheading, and call-to-action.
- **Three-Step Process** – Easy visual explanation of how the platform works.
- **Benefits Grid** – Highlights reasons to choose the service with icons and text.
- **Testimonial Carousel** – Customer feedback in a sliding carousel format.
- **Contact Form Modal** – Frosted-glass style form with validation and a success screen.
- **AI Chat Widget** – Interactive chatbot with both mock and OpenAI modes.
- **Responsive Design** – Optimized for mobile, tablet, and desktop.
- **Tailwind CSS** – Utility-first styling with fast prototyping.

---

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI API (`gpt-3.5-turbo`)
- **Form Validation**: HTML5 with simple feedback
- **State Management**: React hooks
- **Deployment Ready**: Vercel / Netlify

---

## 📁 Project Structure

```
src/
├── assets/        # Images, logo, illustrations
├── components/    # All React UI components
├── data/          # JSON files for testimonials, steps, benefits
├── layouts/       # Layout wrappers (if used)
├── App.jsx        # Root component assembling all parts
├── main.jsx       # App entry point
public/            # Favicon and static files
tailwind.config.js # Tailwind configuration
.env               # API keys
.gitignore         # Git ignored files
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/softsell.git
cd softsell
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables (Optional for real chat)

Create a `.env` file in the root:

```env
VITE_OPENAI_API_KEY=your_openai_key
```

### 4. Run Locally

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

---

## 🧠 AI Chat Modes

The `ChatWidget` supports two modes:

- **Mock Mode**: Pre-defined answers for common queries.
- **Real Mode**: Uses OpenAI's ChatGPT API (via `.env`).

Toggle using the `realMode` prop:

```jsx
<ChatWidget realMode={true} />
```

---

## 📦 Deployment

You can deploy on any static host like:

- **Vercel**
- **Netlify**
- **GitHub Pages** (note: chat will not work without backend/proxy)

Make sure to set the environment variable `VITE_OPENAI_API_KEY` in the platform settings if using real chat.

---

## 📌 Author Notes

This project was created as part of an assignment to demonstrate skills in:

- UI/UX layout design
- React component structure
- Tailwind CSS integration
- Modal handling
- API integration (OpenAI)
- Responsive design
- Clean project documentation

---

## 📄 License

This project is for educational and demonstrative purposes.

