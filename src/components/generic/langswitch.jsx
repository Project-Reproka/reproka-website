import { langlist } from '@/globals/translations'

export default function LangSwitch({ setlg, language }) {
  function handleChange(e) {
    setlg(parseInt(e.target.value))
    localStorage.setItem('lang', parseInt(e.target.value))
  }

  return (
    <select className="w-10/12 bg-[rgba(127,127,255,10%)] px-2 py-2 rounded-lg" onChange={handleChange}> 
      {langlist.map(item => 
        <option value={langlist.indexOf(item)} key={langlist.indexOf(item)} className="bg-[#313157]">{item}</option>
      )}
    </select>
  )
}
