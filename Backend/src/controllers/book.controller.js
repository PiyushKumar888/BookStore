import {Book} from '../models/book.model.js'
import {asyncHandler} from "../utils/asyncHandler.js";

export const getBook = asyncHandler(async (req, res) => {
      const books = await Book.find();
      return res.status(200).json({
          success: true,
          data: books,
      });
})

