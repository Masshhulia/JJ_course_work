DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM public."Roadmaps") THEN
        CREATE TEMP TABLE temp_roadmaps (
            roadmap_ID INT,
            title TEXT,
            "createdAt" TIMESTAMP WITH TIME ZONE,
            "updatedAt" TIMESTAMP WITH TIME ZONE
        );
        
        INSERT INTO temp_roadmaps VALUES
        (1, 'HTML', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (2, 'CSS', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (3, 'JavaScript', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (4, 'GIT', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (5, 'Package Managers', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (6, 'npm', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (7, 'Frontend Framework', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (8, 'React', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (9, 'CSS Framework', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (10, 'Tailwind', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (11, 'Testing Your Apps', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03'),
        (12, 'Jest', '2023-11-28 21:23:00.441914+03', '2023-11-28 21:23:00.441914+03');
        
        INSERT INTO public."Roadmaps" SELECT * FROM temp_roadmaps;
        DROP TABLE temp_roadmaps;
    END IF;
END $$;