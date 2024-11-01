INSERT INTO tickets (
    customer_id, title, discription, completed, tech, created_at, updated_at
) VALUES
(1, 'Login Issue', 'Customer cannot log in to the account; shows error code 101.', false, 'Alice', now(), now()),
(2, 'Password Reset', 'Requested assistance with resetting the account password.', true, 'Bob', now(), now()),
(3, 'Network Connectivity', 'Intermittent connectivity issues affecting email access.', false, 'Charlie', now(), now()),
(4, 'Software Installation', 'Issues installing software update on Windows 10.', true, 'Dana', now(), now()),
(5, 'Printer Not Working', 'Printer offline and not detected on the network.', false, 'Evan', now(), now()),
(6, 'System Crash', 'Customer reports frequent system crashes during usage.', false, 'Frank', now(), now()),
(7, 'Billing Inquiry', 'Customer has a question about recent invoice charges.', true, 'unassigned', now(), now());
