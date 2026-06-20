# Reno Notice Board

A full-stack Notice Board application built with Next.js, Prisma, and MySQL (TiDB Cloud). Supports complete create, read, update, and delete operations with server-side validation, priority-based ordering, and responsive design.

# Live : "https://reno-notice-board-lovat.vercel.app/"
# Git Repo : "https://github.com/Sanjeetkumarrao/reno-notice-board" 
---

## Tech Stack

- **Framework:** Next.js (Pages Router)
- **Database ORM:** Prisma
- **Database:** TiDB Cloud (MySQL-compatible, hosted)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## Features

- Create, read, update, and delete notices
- Server-side input validation on all API routes
- Urgent notices always appear above Normal notices, sorted via Prisma `orderBy` at the database level
- Urgent notices display a red badge
- Delete action requires confirmation before proceeding
- Responsive layout for both phone and desktop

---

## How to Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/Sanjeetkumarrao/reno-notice-board.git
cd reno-notice-board
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:

```
DATABASE_URL="your_tidb_cloud_connection_string"
```

**4. Run database migrations**

```bash
npx prisma migrate dev --name init
```

**5. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## One Thing I Would Improve With More Time

I would add image upload support for notices using Cloudinary. The assignment lists it as a bonus requirement and I had prior experience with Cloudinary in another project, but given the time constraint I prioritised getting the core CRUD functionality stable and deployed correctly. I would also add pagination on the notices listing page, since as notices grow the page would become difficult to navigate.

---

## AI Usage

I used Claude (Anthropic) as an AI assistant throughout this project. I want to be transparent and accurate about this.

**Context:** I had no prior experience with Next.js, Prisma, or TiDB Cloud before this assignment. All three were entirely new to me. The assignment was received on 19 June with a deadline of 20 June, giving me roughly one day to learn and build. I also referred to the YouTube walkthrough provided in the assignment brief and the official Next.js documentation.

Given the time constraint, learning these tools from scratch through tutorials alone and building a fully working, deployed application in a single day was not realistic for me at this stage. I made the decision to use AI assistance to move faster while still making sure I understood what was being built.

**Specifically, AI helped me with:**

- Scaffolding the initial project structure and explaining what each file and folder does in a Next.js Pages Router setup
- Writing the Prisma schema for the Notice model and explaining each field type
- Setting up the TiDB Cloud connection and troubleshooting the `DATABASE_URL` format including SSL parameters
- Writing the API route handlers (`pages/api/notices/index.js` and `pages/api/notices/[id].js`) and explaining why each HTTP method is used for each operation
- Writing the frontend pages for the notice listing, create form, and edit form
- Debugging a Prisma version mismatch (Prisma 7 vs 5) that caused a configuration error
- Explaining concepts like the Prisma singleton pattern in `lib/prisma.js` and why it is needed in Next.js development

**What I did myself:**

- Set up the TiDB Cloud account and cluster
- Understood and reviewed each piece of code before adding it to the project
- Tested all CRUD operations end to end
- Made decisions about project structure and verified requirements against the assignment brief
- Wrote this README

I am aware the assignment mentions that shortlisted candidates may be asked to explain their code in a screen share. I have read through the full codebase and can explain the logic, the API design, and the database layer. I am comfortable doing that.

