import User from "../models/user.model.js";
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getUser=async(
    req,
    res,
    next
)=>{
    try {
        const user = await User.findById(req.params.id).select(
            "-password"
        )
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found",
                });
        }
        res.status(200).json({
            success: true,
            data: user
            })
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                    })
                    }

}
