
// Load API Key from Config File
document.write('<script src="config.js"><\/script>');

// Google Gemini API URL
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;

// Function to Call Gemini AI for Text Generation
async function generateAIResponse(prompt) {
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "AI response unavailable.";
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Error fetching AI response.";
    }
}

// **1️⃣ Profile Optimization with High-Quality Prompts**
async function generateProfile() {
    let profession = document.getElementById("profession").value;
    let skills = document.getElementById("skills").value;
    
    let headlinePrompt = `Act as a LinkedIn personal branding expert. Generate a compelling, attention-grabbing LinkedIn headline for a professional in the ${profession} industry. The headline should:
    - Be short and impactful (under 120 characters)
    - Highlight key strengths related to ${skills}
    - Use power words and branding strategies
    - Be optimized for LinkedIn SEO`;

    let aboutPrompt = `Act as a career coach specializing in LinkedIn profiles. Write a powerful 'About' section for a ${profession} skilled in ${skills}. The section should:
    - Start with a strong hook to engage readers
    - Highlight key accomplishments and expertise
    - Be in a conversational and confident tone
    - End with a compelling call to action for networking or collaboration`;

    document.getElementById("headlineOutput").innerText = await generateAIResponse(headlinePrompt);
    document.getElementById("aboutOutput").innerText = await generateAIResponse(aboutPrompt);
    document.getElementById("generatedProfile").style.display = "block";
}

// **2️⃣ Post Idea Generation with High-Impact Topics**
async function generatePostIdeas() {
    let prompt = `You are a LinkedIn content strategist. Generate 5 engaging LinkedIn post ideas for a professional looking to build their personal brand. The ideas should:
    - Be highly engaging and likely to go viral
    - Include trending industry insights
    - Encourage audience interaction (questions, polls, debates)
    - Be short, direct, and action-oriented`;

    let ideas = await generateAIResponse(prompt);
    document.getElementById("postIdeasList").innerHTML = ideas.split("\n").map(idea => `<li>${idea}</li>`).join("");
    document.getElementById("postContentSection").style.display = "block";
}

// **3️⃣ Full Post Generation with a Viral Structure**
async function generateFullPost() {
    let prompt = `You are a LinkedIn influencer with 100K+ followers. Write a highly engaging, viral LinkedIn post on 'How to build a strong personal brand in 2024'. The post should:
    - Start with a strong hook to grab attention
    - Use storytelling or a personal experience to add credibility
    - Provide 3-5 actionable takeaways
    - End with a question or CTA to encourage engagement`;

    document.getElementById("postOutput").innerText = await generateAIResponse(prompt);
}

// **4️⃣ AI Image Prompt Generation for LinkedIn Posts**
async function generateImagePrompt() {
    let prompt = `You are a creative AI image prompt generator. Create a highly detailed, professional image prompt for a LinkedIn post about AI in marketing. The prompt should:
    - Describe the scene in a visually engaging way
    - Include colors, lighting, and mood details
    - Be suitable for a LinkedIn audience
    - Example format: "A futuristic AI-powered marketing dashboard with data analytics and glowing neon interfaces."`;

    document.getElementById("imagePromptOutput").innerText = await generateAIResponse(prompt);
}

// **5️⃣ Carousel Content Generation for LinkedIn**
async function generateCarouselText() {
    let prompt = `Act as a LinkedIn content strategist. Create 5 highly engaging slides for a LinkedIn carousel post titled '5 Steps to Mastering AI Tools'. Each slide should:
    - Have a powerful, short headline
    - Provide key insights or tips
    - Use engaging language to encourage swiping`;

    document.getElementById("carouselTextOutput").innerText = await generateAIResponse(prompt);
}

// **6️⃣ Carousel Image Prompt Generation**
async function generateCarouselImagePrompt() {
    let prompt = `You are an AI image prompt expert. Generate 3 AI image prompts for a LinkedIn carousel about productivity hacks. Each prompt should:
    - Be visually engaging and conceptually strong
    - Describe colors, mood, and composition
    - Be suitable for a LinkedIn business audience`;

    document.getElementById("carouselImagePromptOutput").innerText = await generateAIResponse(prompt);
}
