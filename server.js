<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CleanSweep Solutions - Carpet Cleaning Services</title>
    <style>
        /* Previous CSS remains the same, with additions for images */
        .logo {
            max-width: 150px;
            height: auto;
        }
        .about img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-top: 1rem;
        }
        .pricing-images {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
        }
        .pricing-images img {
            max-width: 45%;
            height: auto;
            border-radius: 8px;
        }
        .testimonials img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
            .pricing-images {
                flex-direction: column;
                align-items: center;
            }
            .pricing-images img {
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <header>
        <img src="images/logo.png" alt="CleanSweep Solutions Logo" class="logo">
        <h1>CleanSweep Solutions</h1>
        <p>Your Trusted Carpet Cleaning Service</p>
    </header>
    <nav>
        <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="about" class="about">
        <h2>About Us: Our Journey to Cleaner Carpets</h2>
        <p>CleanSweep Solutions Service began as an online venture in Kirgiti, driven by a passion for pristine carpets and exceptional customer service...</p>
        <img src="images/carpet-cleaning.jpg" alt="Professional carpet cleaning in action">
    </section>

    <section id="pricing">
        <h2>Carpet Sizing Guide & Pricing Calculator</h2>
        <p>Easily estimate the cost of your carpet cleaning with our transparent pricing...</p>
        <table>
            <!-- Table content remains the same -->
        </table>
        <div class="pricing-images">
            <img src="images/before-cleaning.jpg" alt="Carpet before cleaning">
            <img src="images/after-cleaning.jpg" alt="Carpet after cleaning">
        </div>
    </section>

    <section id="testimonials" class="testimonials">
        <h2>Customer Testimonials</h2>
        <p>Hear what our clients have to say about the CleanSweep Solutions difference...</p>
        <img src="images/team-photo.jpg" alt="CleanSweep Solutions team">
        <div class="testimonials-grid">
            <!-- Testimonial content remains the same -->
        </div>
    </section>

    <section id="contact" class="contact">
        <h2>Contact Us</h2>
        <p>At CleanSweep Solutions, your satisfaction is our priority...</p>
        <form action="/send" method="POST"> <!-- Use action="send.php" for PHP -->
            <input type="text" name="name" placeholder="Gabriel mwaro" required>
            <input type="email" name="email" placeholder="gabrielmwaro@gmail.com" required>
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2025 CleanSweep Solutions. All rights reserved.</p>
    </footer>
</body>
</html>