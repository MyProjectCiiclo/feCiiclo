<template>
  <div class="page">
    <div class="card">
      <button class="close-btn">×</button>

      <h1 class="title">New Project</h1>
      <p class="subtitle">Create and manage your next amazing project</p>

      <form class="container">
        <div class="form-group">
          <label class="label">Project Name</label>
          <input class="input" type="text" />
        </div>

        <div class="form-group">
          <label class="label">Language</label>
          <input class="input" type="text" />
        </div>

        <div class="form-group">
          <label class="label">Description</label>
          <textarea class="input"></textarea>
        </div>

        <div class="form-group">
          <label class="label">Image</label>
          <input class="input" type="file" accept="image/*" />
          <img class="preview" />
        </div>

        <div class="form-group">
          <label class="label">Project Type</label>
          <select class="select">
            <option disabled value="">Select a project type</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Fullstack</option>
            <option>UI/UX</option>
          </select>
        </div>

        <button type="submit" class="btn">Create Project</button>
      </form>
    </div>
  </div>
</template>

<style>
.page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e7eb;
}

.card {
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: 600;;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
}

.label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #111827;
}
.input,
.select {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
}

.preview {
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
}

.project-card {
  background: white;
  padding: 16px;
  border-radius: 12px;
}

.project-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tags span {
  font-size: 12px;
  background: #eee;
  padding: 4px 8px;
  border-radius: 999px;
}
</style>
