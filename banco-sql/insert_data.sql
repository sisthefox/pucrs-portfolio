-- Insert Users
INSERT INTO users (name, email) VALUES
('Legolas', 'legolas@middleearth.com'),
('Aragorn', 'aragorn@middleearth.com'),
('Gimli', 'gimli@middleearth.com'),
('Frodo', 'frodo@middleearth.com'),
('Sam', 'sam@middleearth.com');

-- Inserting tasks
INSERT INTO tasks (user_id, title, completed, due_date) VALUES
(1, 'Eat lembas bread', FALSE, '2025-07-25'),
(1, 'Hunt orcs', FALSE, '2025-07-20'),
(2, 'Explore Rivendell', TRUE, '2025-07-18'),
(3, 'Forge new axe', FALSE, '2025-07-22'),
(4, 'Destroy the One Ring', FALSE, '2025-07-30'),
(5, 'Plant a garden in the Shire', TRUE, '2025-07-28');

-- Inserting tags
INSERT INTO tags (name) VALUES
('high-priority'),
('low-priority'),
('do later'),
('study'),
('urgent');

-- Task Tags Relations
INSERT INTO task_tags (task_id, tag_id) VALUES
(1, 2),  -- Eat lembas bread → low-priority
(1, 1),  -- Eat lembas bread → high-priority
(2, 1),  -- Hunt orcs → high-priority
(2, 3);  -- Hunt orcs → do later
