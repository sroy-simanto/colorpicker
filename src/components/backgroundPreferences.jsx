/* eslint-disable */

import Button from "./reuseable-components/Button";
import Input from "./reuseable-components/Input";
import Label from "./reuseable-components/Label";
import Title from "./reuseable-components/Title";


export default function BackgroundPreferences({ bgImage, handleBgImageChange, handleBgRemove, handleBgSize, handleBgRepeat, handleBgPosition, handleBgAttachment }) {

    const backgroundStyleProperties = {
        bgSize: {
            
        }
    }

    return (
        <div className="mt-5">
            <Title
                text="Background Preferences"
                className="text-xl text-gray-700 font-bold mb-2"
            />
            <hr />
            <div className="flex justify-between px-3">
                <div className="mt-3">
                    <Title
                        text="Background Preview"
                        className="text-gray-700 text-sm font-bold"
                    />
                    <div className="mt-2">
                        {
                            bgImage ? (
                                <>
                                    <div className="w-48 h-32 rounded-md">
                                        <img src={URL.createObjectURL(bgImage)} className="w-full h-full" alt="image" />
                                    </div>
                                    <div className="mt-3 flex items-center gap-3">
                                        <Button
                                            text="Remove"
                                            className="text-sm bg-slate-200 rounded px-2 py-1"
                                            handler={handleBgRemove}
                                        />
                                        <div>
                                            <Label
                                                className="text-sm bg-slate-200 rounded px-2 py-1"
                                                htmlFor="bg-image"
                                                text="Upload"
                                            />
                                            <Input
                                                type="file"
                                                id="bg-image"
                                                handler={handleBgImageChange}
                                                hidden={true}
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-48 h-32 bg-gray-300 rounded-md"></div>
                                    <div className="mt-3">
                                        <div>
                                            <Label
                                                className="text-sm bg-slate-200 rounded px-2 py-1"
                                                htmlFor="bg-image"
                                                text="Upload"
                                            />
                                            <Input
                                                type="file"
                                                id="bg-image"
                                                handler={handleBgImageChange}
                                                hidden={true}
                                            />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
                {bgImage && (
                    <div className="mt-3">
                        <div>
                            <label className="block my-2 text-sm font-bold" htmlFor="bg-size">Background Size</label>
                            <select onChange={handleBgSize} className="border w-full p-1 outline-none" name="bgSize" id="bg-size">
                                <option value="auto">Auto</option>
                                <option value="inherit">Inherit</option>
                                <option value="contain">Contain</option>
                                <option value="cover">Cover</option>
                            </select>
                        </div>
                        <div>
                            <label className="block my-2 text-sm font-bold" htmlFor="bg-repeat">Background Repeat</label>
                            <select onChange={handleBgRepeat} className="border w-full p-1 outline-none" name="bgRepeat" id="bg-repeat">
                                <option value="repeat">Repeat</option>
                                <option value="no-repeat">No Repeat</option>
                            </select>
                        </div>
                        <div>
                            <label className="block my-2 text-sm font-bold" htmlFor="bg-position">Background Position</label>
                            <select onChange={handleBgPosition} className="border w-full p-1 outline-none" name="bgPosition" id="bg-position">
                                <option value="left-top">Left Top</option>
                                <option value="left-center">Left Center</option>
                                <option value="left-bottom">Left Bottom</option>
                                <option value="right-top">Right Top</option>
                                <option value="right-center">Right Center</option>
                                <option value="right-bottom">Right Bottom</option>
                                <option value="center-top">Center Top</option>
                                <option value="center-center">Center Center</option>
                                <option value="center-bottom">Center Bottom</option>
                            </select>
                        </div>
                        <div>
                            <label className="block my-2 text-sm font-bold" htmlFor="bg-attachment">Background Attachment</label>
                            <select onChange={handleBgAttachment} className="border w-full p-1 outline-none" name="bgAttachment" id="bg-attachment">
                                <option value="initial">Initial</option>
                                <option value="inherit">Inherit</option>
                                <option value="local">Local</option>
                                <option value="fixed">Fixed</option>
                                <option value="scroll">Scroll</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}