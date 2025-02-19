import bcrypt from "bcrypt";

export const compareHash = async (req, res, next) => {
    const { password, hashedPassword } = req.body;
    if (!password || !hashedPassword) {
        return res.status(400).json({ message: "We need a password and hashedPassword you dingus."})
    }

    const isCorrectPassword = await bcrypt.compare(password, hashedPassword); // True or False
    res.status(200).json({ isCorrectPassword });
}