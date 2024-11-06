/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * WebApi
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import {
  useCallback
} from 'react'
import type {
  Alumno,
  AlumnoProfesor,
  Calificacion,
  DeleteApiEliminarAlumnoParams,
  DeleteApiEliminarCalificacionParams,
  GetApiAlumnoParams,
  GetApiAlumnosProfesorParams,
  GetApiCalificacionesParams,
  PostApiAlumnoAsignaturaParams,
  Profesor
} from './model'
import { useCustomInstance } from './useCustomInstance';
import type { ErrorType, BodyType } from './useCustomInstance';



export const useGetApiAlumnosProfesorHook = () => {
        const getApiAlumnosProfesor = useCustomInstance<AlumnoProfesor[]>();

        return useCallback((
    params?: GetApiAlumnosProfesorParams,
 signal?: AbortSignal
) => {
        return getApiAlumnosProfesor(
          {url: `/api/alumnosProfesor`, method: 'GET',
        params, signal
    },
          );
        }, [getApiAlumnosProfesor])
      }
    

export const getGetApiAlumnosProfesorQueryKey = (params?: GetApiAlumnosProfesorParams,) => {
    return [`/api/alumnosProfesor`, ...(params ? [params]: [])] as const;
    }

    
export const useGetApiAlumnosProfesorQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError = ErrorType<unknown>>(params?: GetApiAlumnosProfesorParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAlumnosProfesorQueryKey(params);

  const getApiAlumnosProfesor =  useGetApiAlumnosProfesorHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>> = ({ signal }) => getApiAlumnosProfesor(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiAlumnosProfesorQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>>
export type GetApiAlumnosProfesorQueryError = ErrorType<unknown>


export function useGetApiAlumnosProfesor<TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiAlumnosProfesorParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiAlumnosProfesor<TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiAlumnosProfesorParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiAlumnosProfesor<TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiAlumnosProfesorParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetApiAlumnosProfesor<TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiAlumnosProfesorParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnosProfesorHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetApiAlumnosProfesorQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const useGetApiAlumnoHook = () => {
        const getApiAlumno = useCustomInstance<Alumno>();

        return useCallback((
    params?: GetApiAlumnoParams,
 signal?: AbortSignal
) => {
        return getApiAlumno(
          {url: `/api/alumno`, method: 'GET',
        params, signal
    },
          );
        }, [getApiAlumno])
      }
    

export const getGetApiAlumnoQueryKey = (params?: GetApiAlumnoParams,) => {
    return [`/api/alumno`, ...(params ? [params]: [])] as const;
    }

    
export const useGetApiAlumnoQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError = ErrorType<unknown>>(params?: GetApiAlumnoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAlumnoQueryKey(params);

  const getApiAlumno =  useGetApiAlumnoHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>> = ({ signal }) => getApiAlumno(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiAlumnoQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>>
export type GetApiAlumnoQueryError = ErrorType<unknown>


export function useGetApiAlumno<TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiAlumnoParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiAlumno<TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiAlumnoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiAlumno<TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiAlumnoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetApiAlumno<TData = Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiAlumnoParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiAlumnoHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetApiAlumnoQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const usePutApiAlumnoPutHook = () => {
        const putApiAlumnoPut = useCustomInstance<boolean>();

        return useCallback((
    alumno: BodyType<Alumno>,
 ) => {
        return putApiAlumnoPut(
          {url: `/api/alumnoPut`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: alumno
    },
          );
        }, [putApiAlumnoPut])
      }
    


export const usePutApiAlumnoPutMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePutApiAlumnoPutHook>>>, TError,{data: BodyType<Alumno>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePutApiAlumnoPutHook>>>, TError,{data: BodyType<Alumno>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      const putApiAlumnoPut =  usePutApiAlumnoPutHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePutApiAlumnoPutHook>>>, {data: BodyType<Alumno>}> = (props) => {
          const {data} = props ?? {};

          return  putApiAlumnoPut(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PutApiAlumnoPutMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePutApiAlumnoPutHook>>>>
    export type PutApiAlumnoPutMutationBody = BodyType<Alumno>
    export type PutApiAlumnoPutMutationError = ErrorType<unknown>

    export const usePutApiAlumnoPut = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePutApiAlumnoPutHook>>>, TError,{data: BodyType<Alumno>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePutApiAlumnoPutHook>>>,
        TError,
        {data: BodyType<Alumno>},
        TContext
      > => {

      const mutationOptions = usePutApiAlumnoPutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const usePostApiNuevoAlumnoHook = () => {
        const postApiNuevoAlumno = useCustomInstance<boolean>();

        return useCallback((
    alumno: BodyType<Alumno>,
 ) => {
        return postApiNuevoAlumno(
          {url: `/api/nuevoAlumno`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: alumno
    },
          );
        }, [postApiNuevoAlumno])
      }
    


export const usePostApiNuevoAlumnoMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiNuevoAlumnoHook>>>, TError,{data: BodyType<Alumno>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiNuevoAlumnoHook>>>, TError,{data: BodyType<Alumno>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      const postApiNuevoAlumno =  usePostApiNuevoAlumnoHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostApiNuevoAlumnoHook>>>, {data: BodyType<Alumno>}> = (props) => {
          const {data} = props ?? {};

          return  postApiNuevoAlumno(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiNuevoAlumnoMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostApiNuevoAlumnoHook>>>>
    export type PostApiNuevoAlumnoMutationBody = BodyType<Alumno>
    export type PostApiNuevoAlumnoMutationError = ErrorType<unknown>

    export const usePostApiNuevoAlumno = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiNuevoAlumnoHook>>>, TError,{data: BodyType<Alumno>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePostApiNuevoAlumnoHook>>>,
        TError,
        {data: BodyType<Alumno>},
        TContext
      > => {

      const mutationOptions = usePostApiNuevoAlumnoMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const usePostApiAlumnoAsignaturaHook = () => {
        const postApiAlumnoAsignatura = useCustomInstance<boolean>();

        return useCallback((
    alumno: BodyType<Alumno>,
    params?: PostApiAlumnoAsignaturaParams,
 ) => {
        return postApiAlumnoAsignatura(
          {url: `/api/alumnoAsignatura`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: alumno,
        params
    },
          );
        }, [postApiAlumnoAsignatura])
      }
    


export const usePostApiAlumnoAsignaturaMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiAlumnoAsignaturaHook>>>, TError,{data: BodyType<Alumno>;params?: PostApiAlumnoAsignaturaParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiAlumnoAsignaturaHook>>>, TError,{data: BodyType<Alumno>;params?: PostApiAlumnoAsignaturaParams}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      const postApiAlumnoAsignatura =  usePostApiAlumnoAsignaturaHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostApiAlumnoAsignaturaHook>>>, {data: BodyType<Alumno>;params?: PostApiAlumnoAsignaturaParams}> = (props) => {
          const {data,params} = props ?? {};

          return  postApiAlumnoAsignatura(data,params,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAlumnoAsignaturaMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostApiAlumnoAsignaturaHook>>>>
    export type PostApiAlumnoAsignaturaMutationBody = BodyType<Alumno>
    export type PostApiAlumnoAsignaturaMutationError = ErrorType<unknown>

    export const usePostApiAlumnoAsignatura = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiAlumnoAsignaturaHook>>>, TError,{data: BodyType<Alumno>;params?: PostApiAlumnoAsignaturaParams}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePostApiAlumnoAsignaturaHook>>>,
        TError,
        {data: BodyType<Alumno>;params?: PostApiAlumnoAsignaturaParams},
        TContext
      > => {

      const mutationOptions = usePostApiAlumnoAsignaturaMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const useDeleteApiEliminarAlumnoHook = () => {
        const deleteApiEliminarAlumno = useCustomInstance<boolean>();

        return useCallback((
    params?: DeleteApiEliminarAlumnoParams,
 ) => {
        return deleteApiEliminarAlumno(
          {url: `/api/eliminarAlumno`, method: 'DELETE',
        params
    },
          );
        }, [deleteApiEliminarAlumno])
      }
    


export const useDeleteApiEliminarAlumnoMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarAlumnoHook>>>, TError,{params?: DeleteApiEliminarAlumnoParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarAlumnoHook>>>, TError,{params?: DeleteApiEliminarAlumnoParams}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      const deleteApiEliminarAlumno =  useDeleteApiEliminarAlumnoHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarAlumnoHook>>>, {params?: DeleteApiEliminarAlumnoParams}> = (props) => {
          const {params} = props ?? {};

          return  deleteApiEliminarAlumno(params,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiEliminarAlumnoMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarAlumnoHook>>>>
    
    export type DeleteApiEliminarAlumnoMutationError = ErrorType<unknown>

    export const useDeleteApiEliminarAlumno = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarAlumnoHook>>>, TError,{params?: DeleteApiEliminarAlumnoParams}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarAlumnoHook>>>,
        TError,
        {params?: DeleteApiEliminarAlumnoParams},
        TContext
      > => {

      const mutationOptions = useDeleteApiEliminarAlumnoMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const useGetApiCalificacionesHook = () => {
        const getApiCalificaciones = useCustomInstance<Calificacion[]>();

        return useCallback((
    params?: GetApiCalificacionesParams,
 signal?: AbortSignal
) => {
        return getApiCalificaciones(
          {url: `/api/calificaciones`, method: 'GET',
        params, signal
    },
          );
        }, [getApiCalificaciones])
      }
    

export const getGetApiCalificacionesQueryKey = (params?: GetApiCalificacionesParams,) => {
    return [`/api/calificaciones`, ...(params ? [params]: [])] as const;
    }

    
export const useGetApiCalificacionesQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError = ErrorType<unknown>>(params?: GetApiCalificacionesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiCalificacionesQueryKey(params);

  const getApiCalificaciones =  useGetApiCalificacionesHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>> = ({ signal }) => getApiCalificaciones(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiCalificacionesQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>>
export type GetApiCalificacionesQueryError = ErrorType<unknown>


export function useGetApiCalificaciones<TData = Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError = ErrorType<unknown>>(
 params: undefined |  GetApiCalificacionesParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiCalificaciones<TData = Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiCalificacionesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiCalificaciones<TData = Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiCalificacionesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetApiCalificaciones<TData = Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError = ErrorType<unknown>>(
 params?: GetApiCalificacionesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiCalificacionesHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetApiCalificacionesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const usePostApiNuevaCalificacionHook = () => {
        const postApiNuevaCalificacion = useCustomInstance<boolean>();

        return useCallback((
    calificacion: BodyType<Calificacion>,
 ) => {
        return postApiNuevaCalificacion(
          {url: `/api/nuevaCalificacion`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: calificacion
    },
          );
        }, [postApiNuevaCalificacion])
      }
    


export const usePostApiNuevaCalificacionMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiNuevaCalificacionHook>>>, TError,{data: BodyType<Calificacion>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiNuevaCalificacionHook>>>, TError,{data: BodyType<Calificacion>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      const postApiNuevaCalificacion =  usePostApiNuevaCalificacionHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostApiNuevaCalificacionHook>>>, {data: BodyType<Calificacion>}> = (props) => {
          const {data} = props ?? {};

          return  postApiNuevaCalificacion(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiNuevaCalificacionMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostApiNuevaCalificacionHook>>>>
    export type PostApiNuevaCalificacionMutationBody = BodyType<Calificacion>
    export type PostApiNuevaCalificacionMutationError = ErrorType<unknown>

    export const usePostApiNuevaCalificacion = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiNuevaCalificacionHook>>>, TError,{data: BodyType<Calificacion>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePostApiNuevaCalificacionHook>>>,
        TError,
        {data: BodyType<Calificacion>},
        TContext
      > => {

      const mutationOptions = usePostApiNuevaCalificacionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const useDeleteApiEliminarCalificacionHook = () => {
        const deleteApiEliminarCalificacion = useCustomInstance<boolean>();

        return useCallback((
    params?: DeleteApiEliminarCalificacionParams,
 ) => {
        return deleteApiEliminarCalificacion(
          {url: `/api/eliminarCalificacion`, method: 'DELETE',
        params
    },
          );
        }, [deleteApiEliminarCalificacion])
      }
    


export const useDeleteApiEliminarCalificacionMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarCalificacionHook>>>, TError,{params?: DeleteApiEliminarCalificacionParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarCalificacionHook>>>, TError,{params?: DeleteApiEliminarCalificacionParams}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      const deleteApiEliminarCalificacion =  useDeleteApiEliminarCalificacionHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarCalificacionHook>>>, {params?: DeleteApiEliminarCalificacionParams}> = (props) => {
          const {params} = props ?? {};

          return  deleteApiEliminarCalificacion(params,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteApiEliminarCalificacionMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarCalificacionHook>>>>
    
    export type DeleteApiEliminarCalificacionMutationError = ErrorType<unknown>

    export const useDeleteApiEliminarCalificacion = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarCalificacionHook>>>, TError,{params?: DeleteApiEliminarCalificacionParams}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof useDeleteApiEliminarCalificacionHook>>>,
        TError,
        {params?: DeleteApiEliminarCalificacionParams},
        TContext
      > => {

      const mutationOptions = useDeleteApiEliminarCalificacionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const usePostApiAutenticacionHook = () => {
        const postApiAutenticacion = useCustomInstance<Profesor>();

        return useCallback((
    profesor: BodyType<Profesor>,
 ) => {
        return postApiAutenticacion(
          {url: `/api/autenticacion`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: profesor
    },
          );
        }, [postApiAutenticacion])
      }
    


export const usePostApiAutenticacionMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiAutenticacionHook>>>, TError,{data: BodyType<Profesor>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiAutenticacionHook>>>, TError,{data: BodyType<Profesor>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      const postApiAutenticacion =  usePostApiAutenticacionHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostApiAutenticacionHook>>>, {data: BodyType<Profesor>}> = (props) => {
          const {data} = props ?? {};

          return  postApiAutenticacion(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiAutenticacionMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostApiAutenticacionHook>>>>
    export type PostApiAutenticacionMutationBody = BodyType<Profesor>
    export type PostApiAutenticacionMutationError = ErrorType<unknown>

    export const usePostApiAutenticacion = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiAutenticacionHook>>>, TError,{data: BodyType<Profesor>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePostApiAutenticacionHook>>>,
        TError,
        {data: BodyType<Profesor>},
        TContext
      > => {

      const mutationOptions = usePostApiAutenticacionMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const useGetApiPruebaHook = () => {
        const getApiPrueba = useCustomInstance<string>();

        return useCallback((
    
 signal?: AbortSignal
) => {
        return getApiPrueba(
          {url: `/api/prueba`, method: 'GET', signal
    },
          );
        }, [getApiPrueba])
      }
    

export const getGetApiPruebaQueryKey = () => {
    return [`/api/prueba`] as const;
    }

    
export const useGetApiPruebaQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPruebaQueryKey();

  const getApiPrueba =  useGetApiPruebaHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>> = ({ signal }) => getApiPrueba(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiPruebaQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>>
export type GetApiPruebaQueryError = ErrorType<unknown>


export function useGetApiPrueba<TData = Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiPrueba<TData = Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiPrueba<TData = Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetApiPrueba<TData = Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiPruebaHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetApiPruebaQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




