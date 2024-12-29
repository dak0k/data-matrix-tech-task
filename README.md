<h1>How to Run the Project</h1>

<h3>Backend</h3>
<ul>
    <li>Navigate to the <code>/backend</code> directory.</li>
    <li>Open the project in Visual Studio by opening <code>backend.sln</code>.</li>
    <li>
        Run the project by clicking the Docker Compose button at the top. <br>
        <img src="https://github.com/user-attachments/assets/72425dbb-16bc-4739-a90e-2aaee58c465c" alt="Docker Compose Run Button">
        <p><strong>Note:</strong> If the project fails to start on the first attempt, try running it again.</p>
    </li>
    <li>
        Once the backend is running, you can view the API documentation at: <br>
        <a href="http://localhost:8081/swagger/index.html" target="_blank">
            http://localhost:8081/swagger/index.html
        </a>
    </li>
</ul>

<hr />

<h3>Frontend</h3>
<ul>
    <li>Navigate to the <code>/frontend</code> directory.</li>
    <li>Open the folder in the terminal or console.</li>
    <li>Run the frontend by executing the following command:<br>
        <code>npx nx serve frontend</code>
    </li>
    <li>
        Access the frontend application at: <br>
        <a href="http://localhost:4200" target="_blank">
            http://localhost:4200
        </a>
    </li>
</ul>
