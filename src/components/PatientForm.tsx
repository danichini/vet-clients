import { useForm } from "react-hook-form";
import ErrorComponent from "./ErrorComponent";

export default function PatientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerPatient = () => {};

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Clients name"
            {...register("name", {
              required: "The name of the client is required",
            })}
          />
          {errors.name && (
            <ErrorComponent>{errors.name?.message?.toString()}</ErrorComponent>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Caretaker name"
            {...register("caretaker", {
              required: "The name of the caretaker is required",
            })}
          />
          {errors.caretaker && (
            <ErrorComponent>{errors.caretaker?.message?.toString()}</ErrorComponent>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'The email is not valid'
              }
            })} 
          />
          {errors.email && (
            <ErrorComponent>{errors.email?.message?.toString()}</ErrorComponent>
          )}  
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "date is required",
            })}
          />
          {errors.date && (
            <ErrorComponent>{errors.date?.message?.toString()}</ErrorComponent>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="client symptoms"
            {...register("symptoms", {
              required: "client symptoms are required",
            })}
          />
          {errors.symptoms && (
            <ErrorComponent>{errors.symptoms?.message?.toString()}</ErrorComponent>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}
