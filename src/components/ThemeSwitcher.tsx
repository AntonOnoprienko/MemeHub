import {useTheme} from "@heroui/use-theme";
import {Select, SelectItem} from "@heroui/react";
import { ChangeEvent} from "react";
interface ITheme {
    key: string;
    label: string;
}
export const themes: ITheme[] = [
    { key: "purple-dark", label: "Purple Dark" },
    { key: "blue-night", label: "Blue Night" },
    { key: "green-matrix", label: "Green Matrix" },
    { key: "peach-light", label: "Peach Light" },
    { key: "frost-light", label: "Frost Light" },
    { key: "light", label: "Light" },
    { key: "dark", label: "Dark" },
];

const ThemeSwitcher = () => {
    const { theme, setTheme  } = useTheme()

    const changeTheme = (event:ChangeEvent<HTMLSelectElement>) => {
            if(event.target.value && event.target.value !== theme ){
                setTheme(event.target.value)
            }
    }

    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select
                className="max-w-xs min-w-[150px]"
                label="Active Theme"
                value={theme}
                placeholder="Select theme"
                onChange={changeTheme}

            >
                {themes.map((t: ITheme):any => (
                    <SelectItem isDisabled={theme === t.key} key={t.key} value={t.key}>
                        {t.label}
                    </SelectItem>
                ))}
            </Select>

        </div>

    );
};

export default ThemeSwitcher;