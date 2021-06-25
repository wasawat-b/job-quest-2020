import PersonalForm from "../information/personal";
import MarathonExperience from "../information/marathonExperience";
import EmergencyContact from "../information/emergencyContact";
import HealthDetail from "../information/healthDetail";
import Souvenir from "../information/souvenir";

const InputForm: React.FC = () => {
  return (
    <div>
      <form>
      <div className="accordion" id="accordionExample">
        <PersonalForm />
        <MarathonExperience />
        <EmergencyContact />
        <HealthDetail />
        <Souvenir />
      </div>
        <div>
          <button>Save Draft</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
