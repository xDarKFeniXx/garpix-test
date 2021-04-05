import {useDispatch, useSelector} from "react-redux";
import {loadingSelector} from "../store/authors/authors.selectors";
import {useEffect} from "react";
import {LoadingEnum} from "../types/loading.enum";
import {asyncAuthorsAC} from "../store/authors/authors.reducer";

export const useLoadedAuthors=()=>{
    const loading=useSelector(loadingSelector)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(loading===LoadingEnum.NEVER){
            dispatch(asyncAuthorsAC.fetchData())
        }
    }, [dispatch, loading])

}
