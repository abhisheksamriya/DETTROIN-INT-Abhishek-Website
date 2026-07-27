export default function EnquiryForm() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden border border-gray-100">
      <div className="bg-brand-green px-6 py-4 text-center">
        <h3 className="text-white font-semibold text-xl">Admissions Open</h3>
        <p className="text-brand-yellow text-xl font-bold mt-1">Quick Enquiry</p>
      </div>

      <form className="p-6 space-y-4" >
        <div>
          <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all cursor-pointer appearance-none">
            <option>2026-2027</option>
            <option>2027-2028</option>
          </select>
        </div>

        <div>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all"
            required
          />
        </div>

        <div>
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all"
            required
          />
        </div>

        <div>
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all"
            required
          />
        </div>

        <div className="relative">
          <select 
            required
            defaultValue=""
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all cursor-pointer appearance-none"
          >
            <option value="" disabled>Select a Grade</option>
            <option value="Play Group">Play Group</option>
            <option value="Nursery">Nursery</option>
            <option value="Kindergarten">Kindergarten</option>
            <option value="Daycare">Daycare</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>

        <div>
          <textarea 
            placeholder="Message Type here..." 
            rows={3}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-brand-yellow text-brand-green font-bold text-lg py-2.5 rounded-lg hover:brightness-105 transition-all shadow-sm active:scale-[0.98] cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}