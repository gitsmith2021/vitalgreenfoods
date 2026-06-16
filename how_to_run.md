# Running the Vital Green Food Project

This project is a decentralized application exported from [Caffeine](https://caffeine.ai/) built on the **Internet Computer Protocol (ICP)**. It consists of:
- A **React & TypeScript** frontend (using Vite, TailwindCSS, and shadcn/ui) in `src/frontend`.
- A **Motoko** backend canister in `src/backend`.

Since the Motoko backend compilation and the ICP command-line interface (`icp-cli`) are tailored for Linux/macOS environments, the recommended way to run the full stack on Windows is using **Docker** or **Windows Subsystem for Linux (WSL)**.

---

## Prerequisites

Before getting started, make sure you have the following installed on your Windows machine:
1. **Node.js** (v20.x or higher recommended)
2. **pnpm** (installed globally: `npm i -g pnpm`)
3. **Docker Desktop** (Required for Docker method)
4. **Git Bash** or **WSL** (Required if running shell scripts directly)

---

## Method 1: Running with Docker (Recommended for Windows)

Using Docker is the easiest way to spin up the local replica, build the Motoko backend, and serve the application without manually installing compiler tools.

### 1. Build the Docker Image
Open your terminal (PowerShell, CMD, or Git Bash) in the project root folder and build the image:
```bash
docker build -t vital-green-food-app .
```

### 2. Run the Container
Run the container to start the local ICP replica and deploy the frontend/backend canisters:
```bash
docker run -it -p 8080:8080 -p 8081:8081 -p 8000:8000 --name vital-green-food-container vital-green-food-app
```
*Note: This runs the container and exposes the replica ports so you can interact with the app.*

---

## Method 2: Running Frontend in Local Dev Mode

If you are only editing the frontend UI and styles, you can run the Vite development server locally on Windows.

### 1. Install Dependencies
From the project root directory, run:
```bash
pnpm install
```

### 2. Run the Vite Dev Server
To start the React frontend with hot-reloading:
```bash
pnpm --filter "@caffeine/template-frontend" dev
```
By default, the frontend will be accessible at:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## Method 3: Full Stack Local Development (WSL / Linux / macOS)

If you have **WSL** (Windows Subsystem for Linux) installed and want to run the full local network natively:

### 1. Install Global CLI & Compiler Tools (WSL / Linux)
Follow the commands defined in the `Dockerfile` to install dependencies in your WSL environment:

- **Install `ic-mops`**:
  ```bash
  npm i -g ic-mops@1.11.1
  ```

- **Install `icp-cli`**:
  ```bash
  curl --proto '=https' --tlsv1.2 -LsSf https://github.com/dfinity/icp-cli/releases/download/v0.1.0-beta.3/icp-cli-installer.sh | sh
  ```

- **Install Motoko Compiler (1.2.0)**:
  Download the release matching your architecture from the [Motoko compiler repo](https://github.com/caffeinelabs/motoko) and unpack it to your local environment.

- **Set Environment Variables**:
  Make sure `MOC_PATH`, `MOTOKO_CORE`, and `MOTOKO_BASE` point to your Motoko installation paths:
  ```bash
  export MOC_PATH="/path/to/moc"
  export MOTOKO_CORE="/path/to/motoko-core"
  export MOTOKO_BASE="/path/to/motoko-base"
  ```

### 2. Deploy Local Canisters
Run the deployment script from your terminal:
```bash
./deploy.sh
```
This script will start the local ICP network, create/build both the frontend and backend canisters, and deploy them.

### 3. Run the Local Dev Frontend
Once deployed, run:
```bash
pnpm --filter "@caffeine/template-frontend" dev
```

---

## Project Structure & Commands

- **Root commands**:
  - `pnpm build`: Build all workspaces.
  - `pnpm typecheck`: Run TypeScript compilation checks.
  - `pnpm check`: Run Biome linter/formatter check.
  - `pnpm fix`: Automatically resolve linter/formatter issues.
- **Frontend Source Directory**: `src/frontend/src/`
- **Backend Source Directory**: `src/backend/` (specifically `main.mo` for Motoko actor code)
