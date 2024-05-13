import { usePatientStore } from "../store";

export default function PatientsList() {
  const { patients } = usePatientStore();
  console.log("🚀 ~ PatientsList ~ patients:", patients);
  return <div>PatientsList</div>;
}
