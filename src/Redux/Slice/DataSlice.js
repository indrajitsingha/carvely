import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { app } from '../../Firebase/Firebaseapp'
import { getFirestore, collection, getDocs,} from "firebase/firestore";


const fireStoreDb = getFirestore(app);

export const STATUS=Object.freeze({
  IDEL:'idle',
  ERROR:'Error',
  LOADING:'loading',
})

const DataSlice = createSlice({
  name: "CarData",
  initialState: {
    Cardetails: [],
    latestCar: [],
    Brands: [],
    Category: [],
    searchQuery: [],
    searchReasult: [],
    firstCompCar:"",
    secondCompCar:"",
    status:STATUS.IDEL,
  },
  reducers: {
    getlatestCar(state) {
      let arr = []
      state.Cardetails.map((x, index) => {
        if (index < 4) {
          arr = [...arr, x]
        }
        return x
      })
      state.latestCar = arr
    },

    carSearchQuery(state, action) {
      state.searchQuery = action.payload
    },

    GetSearchData(state, action) {
      console.log(action.payload)
      const { carName, Category, Brand, Price } = action.payload

      let search = state.Cardetails.filter((x) => x.Name === carName || x.BodyType === Category || x.Brand === Brand || x.Brand === Price)

      state.searchReasult = search
    },

    getFisrtCompCar(state,action){
      const filterQue=state.Cardetails.find((x)=>x.Name===action.payload)
      state.firstCompCar=[filterQue]
    },
    getSecondCompCar(state,action){
      const filterQue2=state.Cardetails.find((x)=>x.Name===action.payload)
      state.secondCompCar=[filterQue2]
    }


  }, extraReducers: (builder) => {
    builder.addCase(featchCarData.pending, (state) => {
      console.log("pending");
      state.status =STATUS.LOADING;
    })
      .addCase(featchCarData.fulfilled, (state, action) => {
        state.Cardetails = action.payload.CarData
        state.PaginationData = action.payload.pagiNationData
        state.Brands = action.payload.Brands
        state.Category = action.payload.Category
        console.log("Success");
        state.status=STATUS.IDEL
      })
      .addCase(featchCarData.rejected, (state) => {
        console.log("rejected");
        state.status=STATUS.ERROR
      })
  }

})


export const featchCarData = createAsyncThunk("carinfo/cardata", async () => {
  const getCarData = await getDocs(collection(fireStoreDb, "CarInfo"));
  const getCarBrands = await getDocs(collection(fireStoreDb, "Brands"));
  const getCarCategory = await getDocs(collection(fireStoreDb, "Category"));
  let data = []
  let Brand = []
  let Category = []
  let PaginationDataAll = []
  getCarData.forEach((doc) => {
    data = [...data, doc.data()]
  })
  getCarBrands.forEach((doc) => {
    Brand = [...Brand, doc.data()]
  })
  getCarCategory.forEach((doc) => {
    Category = [...Category, doc.data()]
  })

  return { CarData: data, pagiNationData: PaginationDataAll, Brands: Brand, Category: Category }
})

export default DataSlice.reducer

export const { getlatestCar, GetSearchData, carSearchQuery,getFisrtCompCar,getSecondCompCar} = DataSlice.actions