import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashBoardFormPage";

const Profile = () => {
  return (
    <Wrapper>
      <form className="form">
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            labelText="First name"
            value={"Malkesh"}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={"Prajapati"}
          />
          <FormRow
            type="text"
            name="contact"
            labelText="contact"
            value={"9999912345"}
          />
          <FormRow
            type="email"
            name="email"
            labelText="email"
            value={"malkesh@gmail.com"}
          />
          <FormRow
            type="text"
            name="location"
            labelText="location"
            value={"Mumbai"}
          />
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
