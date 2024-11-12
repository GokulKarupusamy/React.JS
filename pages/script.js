// Dashboard Route
router.get('/dashboard', async (req, res) => {
    const totalClients = await pool.query('SELECT COUNT(*) FROM clients');
    const totalPayments = await pool.query('SELECT SUM(amount) FROM payments');
    res.json({ totalClients: totalClients.rows[0].count, totalPayments: totalPayments.rows[0].sum });
});

// Clients Route
router.get('/clients', async (req, res) => {
    const clients = await pool.query('SELECT * FROM clients');
    res.json(clients.rows);
});

// Packages Route
router.get('/packages', async (req, res) => {
    const packages = await pool.query('SELECT * FROM packages');
    res.json(packages.rows);
});

// Instructors Route
router.get('/instructors', async (req, res) => {
    const instructors = await pool.query('SELECT * FROM instructors');
    res.json(instructors.rows);
});

// Memberships Route
router.get('/memberships', async (req, res) => {
    const memberships = await pool.query('SELECT * FROM memberships');
    res.json(memberships.rows);
});

// Payments Route
router.get('/payments', async (req, res) => {
    const payments = await pool.query('SELECT * FROM payments');
    res.json(payments.rows);
});

// Enquiries Route
router.get('/enquiries', async (req, res) => {
    const enquiries = await pool.query('SELECT * FROM enquiries');
    res.json(enquiries.rows);
});

module.exports = router;