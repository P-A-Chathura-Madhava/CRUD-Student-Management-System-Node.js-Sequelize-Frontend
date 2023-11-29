import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentService from '../../students/StudentService'

export const getStudents = createAsyncThunk("getStudents", async (thunkAPI) => {
  try {
    return await studentService.getAllStudents();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getStudentById = createAsyncThunk(
  "getStudentById",
  async (id, thunkAPI) => {
    try {
      return await studentService.getStudentById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const saveStudent = createAsyncThunk(
  "saveStudent",
  async (studentData, thunkAPI) => {
    try {
      return await studentService.createStudent(studentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateAStudent= createAsyncThunk(
  "updateAStudent",
  async (student, thunkAPI) => {
    try {
      return await studentService.updateStudent(student);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAStudent = createAsyncThunk(
  "DeleteAStudent",
  async (id, thunkAPI) => {
    try {
      return await studentService.deleteStudent(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const studentSlice = createSlice({
  name: "student-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = "completed";
        state.data = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = 'Something went wrong'
      })
      .addCase(getStudentById.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getStudentById.fulfilled, (state, action) => {
        state.loading = "completed";
        state.data = action.payload;
      })
      .addCase(getStudentById.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = 'Something went wrong'
      }).addCase(saveStudent.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(saveStudent.fulfilled, (state, action) => {
        state.loading = "completed";
        state.createdStudent = action.payload;
      })
      .addCase(saveStudent.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = 'Something went wrong'
      }).addCase(updateAStudent.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(updateAStudent.fulfilled, (state, action) => {
        state.loading = "completed";
        state.updatedStudent = action.payload;
      })
      .addCase(updateAStudent.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = 'Something went wrong'
      }).addCase(deleteAStudent.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(deleteAStudent.fulfilled, (state, action) => {
        state.loading = "completed";
        state.deletedStudent = action.payload;
      })
      .addCase(deleteAStudent.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = 'Something went wrong'
      });
  },
});

export const selectAllStudents = (store) => store.get;
export default studentSlice.reducer;
