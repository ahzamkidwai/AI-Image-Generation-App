import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("Prompt is : ", prompt);

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });

    console.log("AI RESPONSE is : \n", aiResponse);

    const imageUrl = aiResponse.data.data[0].url;
    return res.status(200).json({
      success: true,
      message: "Image generated Successfully",
      data: imageUrl,
    });
  } catch (error) {
    console.log("Error occured while generating image : ", error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.messsage);
    }
    res.status(400).json({
      success: false,
      error: "The image could not be generated",
    });
  }
};

// export default generateImage;
