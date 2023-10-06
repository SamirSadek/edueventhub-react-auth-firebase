const App = () => {
  return (
   <div className='overflow-hidden rounded-lg has-shadow w-80'>
  <img src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    className='aspect-video rounded-b-none'
    alt='' />
  <div className='p-4 flex flex-col gap-2'>
    <div className='text-xs'>
      Ricco Xie • 1 June 2023
    </div>
    <h3 className='text-xl font-semibold'>
      Sira team talk
    </h3>
    <div className='text-sm'>
      <p>
        🕹 Customizable and 😍 accessible design system which provides TailwindCSS component className name library to build
modern UI. 💥
      </p>
    </div>
    <div className='flex gap-2'>
      <span className='badge light info'>
        Design
      </span>
      <span className='badge light primary'>
        Product
      </span>
      <span className='badge light danger'>
        Developer
      </span>
    </div>
  </div>
  <div className='w-fit font-bold from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent'>
  <p>
    Hello
  </p>
</div>
</div>
  );
};

export default App;
