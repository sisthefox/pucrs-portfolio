-- Users  
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Tasks  
CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    due_date DATE,
    CONSTRAINT fk_tasks_user
      FOREIGN KEY (user_id) REFERENCES users(id)
      ON DELETE CASCADE
);

-- Tags
CREATE TABLE tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Relation N:N between tasks and tags
CREATE TABLE task_tags (
    task_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (task_id, tag_id),
    CONSTRAINT fk_tasktags_task
      FOREIGN KEY (task_id) REFERENCES tasks(id)
      ON DELETE CASCADE,
    CONSTRAINT fk_tasktags_tag
      FOREIGN KEY (tag_id) REFERENCES tags(id)
      ON DELETE CASCADE
);
