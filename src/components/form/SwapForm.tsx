import Back from '../button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import Select from 'react-select'
import useSwapForm from '../../hooks/useSwapForm'

const SwapForm = () => {
    const { swapform, selectedOption, handleChange, selectedOption2, handleChange2,
        selectedOption3, handleChange3, selectedOption4, handleChange4,
        selectedOption5, handleChange5, swapformsekolah, swapformsekolah2,
        swapformsekolah3, swapformsekolah4, handleChange6, selectedOption6, swapformfieldperiode } = useSwapForm();


    return (
        <>
            <div>
                <Back
                    firstElement={
                        <>
                            <div>
                                <a href='/home'>
                                    <div className='flex items-center text-2xl pt-10 pl-10'>
                                        <BsChevronLeft />
                                        <p> Back</p>
                                    </div>
                                </a>
                            </div>
                        </>
                    } />
            </div>
            <div>
                <div className='mx-[30%]'>
                    <p className='text-center text-[#798996] text-2xl font-bold'>
                        Fill Criteria For Swap SKill
                    </p>
                    <div className='mt-10'>
                        <label className='font-light' htmlFor="selectOption">Field</label>
                        <Select options={swapform} value={selectedOption} onChange={handleChange} />
                    </div>

                    <div className="mt-5">
                        {selectedOption.value === 'sekolah' && (
                            <>
                                <form>
                                    <div className='mt-5'>
                                        <label className='font-light' htmlFor="selectOption">Skill (main)</label>
                                        <Select options={swapformsekolah} value={selectedOption2} onChange={handleChange2} />
                                        <Select className='mt-2' options={swapformsekolah2} value={selectedOption3} onChange={handleChange3} />
                                    </div>
                                    <div className='mt-5'>
                                        <label className='font-light' htmlFor="selectOption">Alternative (if main not exist)</label>
                                        <Select options={swapformsekolah3} value={selectedOption4} onChange={handleChange4} />
                                    </div>
                                    <div className='mt-5'>
                                        <label className='font-light' htmlFor="selectOption">Alternative 2 (if main not exist)</label>
                                        <Select options={swapformsekolah4} value={selectedOption5} onChange={handleChange5} />
                                    </div>
                                </form>
                                <div className='pt-10'>
                                    <p>Swap with your skill (min pick 3)</p>
                                </div>
                                <div className='mt-5'>
                                    <label className='font-light' htmlFor="selectOption">Period teaching</label>
                                    <Select options={swapformfieldperiode} value={selectedOption6} onChange={handleChange6} />
                                </div>
                                <button
                                    type="submit"
                                    className="w-[100%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                                >
                                    Find your mate
                                </button>
                            </>
                        )}

                        {selectedOption.value === 'pekerjaan' && (
                            <form>
                                <label htmlFor="teacherForm">Jobs</label>
                                <input
                                    type="text"
                                    className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                    required
                                />
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwapForm