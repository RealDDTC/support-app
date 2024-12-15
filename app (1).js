<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RecTuberMultiShow Support</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Basic Zendesk-style layout */
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f6f7;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .support-container {
            width: 90%;
            max-width: 800px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            box-sizing: border-box;
        }
        h1 {
            font-size: 24px;
            color: #333;
            text-align: center;
        }
        label {
            display: block;
            margin-top: 10px;
            font-weight: bold;
        }
        input, select, textarea, button {
            width: 100%;
            margin-top: 5px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            box-sizing: border-box;
        }
        textarea {
            resize: none;
        }
        button {
            background-color: #007bff;
            color: white;
            font-weight: bold;
            cursor: pointer;
            margin-top: 15px;
        }
        button:hover {
            background-color: #0056b3;
        }
        .thank-you-message {
            display: none;
            text-align: center;
            margin-top: 20px;
        }
        .support-links {
            margin-top: 20px;
            text-align: center;
        }
        .support-links a {
            color: #007bff;
            text-decoration: none;
        }
        .support-links a:hover {
            text-decoration: underline;
        }

        @media (min-width: 1024px) {
            .support-container {
                padding: 40px;
            }
            h1 {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="support-container">
        <h1>RecTuberMultiShow Support</h1>

        <form id="support-form" action="https://formspree.io/f/xkgnalkk" method="POST" enctype="multipart/form-data">
            <!-- Email Field -->
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required>

            <!-- Rec Room Username -->
            <label for="username">Rec Room Username (include @ symbol):</label>
            <input type="text" id="username" name="username" pattern="@.*" title="Must start with @" required>

            <!-- Issue Type -->
            <label for="issue">Issue Type:</label>
            <select id="issue" name="issue" required>
                <option value="Technical Support">Technical Support</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feedback/Feature Request">Feedback/Feature Request</option>
                <option value="Room Ban Appeal">Room Ban Appeal</option>
            </select>

            <!-- Priority Level -->
            <label for="priority">Priority Level:</label>
            <select id="priority" name="priority" required>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
            </select>

            <!-- Message Field -->
            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <!-- File Upload -->
            <label for="files">Attach Files (optional):</label>
            <input type="file" id="files" name="files" multiple>

            <!-- Submit Button -->
            <button type="submit">Submit</button>
        </form>

        <!-- Thank You Message -->
        <div id="thank-you-message" class="thank-you-message">
            <p>Thank you for contacting RecTuberMultiShow Support. We will review your request and get back to you as soon as possible.</p>
        </div>

        <!-- Support Links -->
        <div class="support-links">
            <p>For FAQs and more help, visit our <a href="#">Help Center</a>.</p>
            <p>To report a player, <a href="https://recroom.zendesk.com/hc/en-us/requests/new" target="_blank">click here</a>.</p>
        </div>
    </div>

    <script>
        // JavaScript to handle form submission
        const form = document.getElementById("support-form");
        const thankYouMessage = document.getElementById("thank-you-message");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    thankYouMessage.style.display = "block";
                } else {
                    alert("There was an error submitting the form. Please try again later.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An unexpected error occurred. Please try again.");
            });
        });
    </script>
</body>
</html>
