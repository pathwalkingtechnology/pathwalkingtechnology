import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { message } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const chatbotReply = response.data.choices[0].message.content;
    res.status(200).json({ reply: chatbotReply });
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    res.status(500).json({ message: "Error communicating with OpenAI" });
  }
}
