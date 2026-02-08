import { Select, SelectContent, SelectItem } from "@radix-ui/react-select";
import { Input, Textarea, Label } from "reactstrap";


const commonForm = ({ formControl, formData, setFormData, onSubmit, buttonText }) => {

  const types = {
    INPUT: "input",
    TEXTAREA: "textarea",
    SELECT: "select"
  }

  const renderInputsByComponentName = (controlItems) => {
    let element = null;
    const value = formData[controlItems.name] || "";

    switch (controlItems.componentType) {
      case types.INPUT:
        element = (
        <Input
          id={controlItems.name}
          name={controlItems.name}
          placeholder={controlItems.placeholder}
          type={controlItems.type}
          value={value}
          onChange={(e) => setFormData({
            ...formData, 
            [controlItems.name]: e.target.value})}
        />
        );
        break;
      case types.TEXTAREA:
        element = (
        <Textarea
          id={controlItems.name}
          name={controlItems.name}
          placeholder={controlItems.placeholder}
          type={controlItems.type}
          value={value}
          onChange={(e) => setFormData({
            ...formData, 
            [controlItems.name]: e.target.value})}
        />
        );
        break;
      case types.SELECT:
        element = (
        <Select 
          value={value} 
          onValueChange={(val) => setFormData({
            ...formData, 
            [controlItems.name]: val})}
        >
          <Select.Trigger className="w-full">
            <Select.Value placeholder={controlItems.placeholder} />
          </Select.Trigger>
          <SelectContent>
              {
                controlItems?.options && controlItems?.options?.length > 0 ?
                  controlItems.options.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>
                  )) : null
              }
          </SelectContent>
        </Select>
        );
        break;
      default: element = (
      <Input
        id={controlItems.name}
        name={controlItems.name}
        placeholder={controlItems.placeholder}
        type={controlItems.type}
        value={value}
        onChange={(e) => setFormData({
            ...formData, 
            [controlItems.name]: e.target.value})}
      />
      );
      break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControl.map((control) => <div key={control.name} className="grid w-full">
          <Label className="mb-1" for={control.name}>{control.label}</Label>
          {
            renderInputsByComponentName(control)
          }
        </div>)}
      </div>
      <Button type="submit" className="mt-2 w-full">{buttonText || "Submit"}</Button>
    </form>
  );
};

export default commonForm;