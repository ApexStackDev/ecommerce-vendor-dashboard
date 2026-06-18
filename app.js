

document.addEventListener('DOMContentLoaded', () => {
    console.log('--- ApexStack Engine Initialized ---');
    console.log('Status: Operational');
    console.log('Database Link State: Schema Ready (schema.sql awaiting production environment)');
    
    
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const targetView = link.textContent.trim();
            console.log(`System Navigation Triggered: Routing to [${targetView}]`);
            
            
            alert(`Simulation Mode: The "${targetView}" viewport is ready. Full live querying requires establishing a backend server link.`);
        });
    });
});